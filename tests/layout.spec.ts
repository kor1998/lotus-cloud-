import { expect, test, type Page } from '@playwright/test'
import { DEVICES, ROUTES } from './devices'

/*
  Layout tests: every page on every device.
  Each device is its own group of tests, so a failure names the screen it broke on.
*/

/** Load a page and let its scripts, lazy chunks and fonts settle. */
async function open(page: Page, route: string) {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  await page.goto(route)
  await page.waitForSelector('h1', { timeout: 15_000 })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(250)
  return errors
}

/** Scroll through the page once so lazy images load. */
async function scrollThrough(page: Page) {
  const h = await page.evaluate(() => document.documentElement.scrollHeight)
  // lazy images start loading well before they are on screen, so a fixed step is enough on any screen height
  for (let y = 0; y < h; y += 1200) {
    await page.evaluate((v) => window.scrollTo(0, v), y)
    await page.waitForTimeout(20)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
}

for (const device of DEVICES) {
  test.describe(`${device.name} (${device.width}x${device.height})`, () => {
    test.use({ viewport: { width: device.width, height: device.height }, hasTouch: device.touch })

    // ---------- every page ----------
    for (const route of ROUTES) {
      test(`${route}: fits the screen, has no errors`, async ({ page }) => {
        const errors = await open(page, route)
        await scrollThrough(page)

        const report = await page.evaluate(() => {
          const vw = window.innerWidth
          const problems: string[] = []
          if (document.documentElement.scrollWidth > vw) problems.push(`page scrolls sideways (${document.documentElement.scrollWidth}px > ${vw}px)`)

          // An element counts as broken only if nothing above it clips it (marquee, cards and the footer wordmark clip on purpose).
          const clipped = (el: Element) => {
            for (let a = el.parentElement; a && a !== document.body && a !== document.documentElement; a = a.parentElement) {
              const o = getComputedStyle(a)
              if (['hidden', 'clip', 'auto', 'scroll'].includes(o.overflowX) && a.getBoundingClientRect().right <= vw + 1) return true
            }
            return false
          }
          document.querySelectorAll('main *, footer *, header *').forEach((el) => {
            if (el.closest('svg, .drawer, .menu, .nav__scrim')) return
            const r = el.getBoundingClientRect()
            if (!r.width || !r.height) return
            if ((r.right > vw + 1 || r.left < -1) && !clipped(el)) problems.push(`${el.tagName.toLowerCase()}.${String(el.getAttribute('class') ?? '').split(' ')[0]} reaches ${Math.round(r.left)}..${Math.round(r.right)}`)
          })

          // text that overflows its own box
          document.querySelectorAll('h1, h2, h3, p, a, button, li').forEach((el) => {
            const cs = getComputedStyle(el)
            if (el.closest('svg, .drawer, .marquee') || cs.display === 'inline') return
            if (['hidden', 'clip'].includes(cs.overflowX) && el.scrollWidth > el.clientWidth + 2 && el.children.length === 0) problems.push(`text clipped: "${(el.textContent ?? '').trim().slice(0, 30)}"`)
          })

          if (document.querySelectorAll('h1').length !== 1) problems.push(`${document.querySelectorAll('h1').length} h1 elements (expected 1)`)
          if (!document.title.trim()) problems.push('page has no title')
          const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src'))
          if (broken.length) problems.push(`broken images: ${broken.join(', ')}`)
          return [...new Set(problems)].slice(0, 8)
        })

        expect(report, report.join('\n')).toEqual([])
        expect(errors, errors.join('\n')).toEqual([])
      })
    }

    // ---------- shared frame: header, content edge, footer ----------
    test('header: logo and Menu are visible and inside the content width', async ({ page }) => {
      await open(page, '/')
      const m = await page.evaluate(() => {
        const R = (s: string) => { const r = document.querySelector(s)!.getBoundingClientRect(); return { l: r.left, r: r.right, t: r.top, b: r.bottom } }
        return { logo: R('.logo'), menu: R('.nav__menu'), vw: innerWidth }
      })
      expect(m.logo.l).toBeGreaterThanOrEqual(0)
      expect(m.menu.r).toBeLessThanOrEqual(m.vw)
      expect(m.logo.r, 'logo overlaps the Menu button').toBeLessThan(m.menu.l)
      expect(m.logo.t).toBeGreaterThanOrEqual(0)
    })

    test('content edge: every section starts on the same left line as the logo', async ({ page }) => {
      for (const route of ['/', '/services']) {
        await open(page, route)
        const lefts = await page.evaluate(() => {
          const out = new Set<number>()
          document.querySelectorAll('main .wrap, footer .wrap').forEach((w) => {
            const r = w.getBoundingClientRect()
            out.add(Math.round(r.left + parseFloat(getComputedStyle(w).paddingLeft)))
          })
          out.add(Math.round(document.querySelector('.logo')!.getBoundingClientRect().left))
          return [...out]
        })
        expect(lefts, `${route}: left edges differ: ${lefts.join(', ')}`).toHaveLength(1)
      }
    })

    test('footer: the large wordmark stays inside the content width', async ({ page }) => {
      await open(page, '/')
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
      const m = await page.evaluate(() => {
        const w = document.querySelector('.footer .wrap')!
        const wr = w.getBoundingClientRect()
        const pad = parseFloat(getComputedStyle(w).paddingLeft)
        const t = document.querySelector('.footer__mark span')!.getBoundingClientRect()
        return { contentL: wr.left + pad, contentR: wr.right - pad, textL: t.left, textR: t.right }
      })
      expect(m.textL, 'wordmark starts left of the content').toBeGreaterThanOrEqual(m.contentL - 3)
      expect(m.textR, 'wordmark runs past the content').toBeLessThanOrEqual(m.contentR + 3)
    })

    test('lazy images load after scrolling', async ({ page }) => {
      await open(page, '/')
      await scrollThrough(page)
      await page.waitForTimeout(400)
      const broken = await page.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src')))
      expect(broken).toEqual([])
    })

    // ---------- sticky navigation ----------
    test('navbar: stays on screen while scrolling (floating card), leaves only at the footer', async ({ page }) => {
      await open(page, '/')
      const nav = () =>
        page.evaluate(() => {
          const n = document.querySelector('.nav')!
          const r = n.getBoundingClientRect()
          const glass = getComputedStyle(n)
          const menu = document.querySelector('.nav__menu')!.getBoundingClientRect()
          return { top: r.top, bottom: r.bottom, vw: innerWidth, blur: glass.backdropFilter, blend: getComputedStyle(n).mixBlendMode, bg: getComputedStyle(n).backgroundColor, logo: getComputedStyle(document.querySelector('.logo')!).color, menuTop: menu.top, menuBottom: menu.bottom }
        })

      // scrolled into the middle of the page
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.45))
      await page.waitForTimeout(450)
      let n = await nav()
      expect(n.top, 'navbar left the screen while scrolling').toBeCloseTo(0, 0)
      expect(n.menuTop).toBeGreaterThanOrEqual(0)
      expect(n.blur === 'none' || n.blur === undefined, 'bar must not blur the page').toBe(true)
      expect(n.blend, 'no blend filter on the bar').toBe('normal')

      // at the footer it moves away
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
      await page.waitForTimeout(600)
      n = await nav()
      expect(n.bottom, 'navbar should slide away at the footer').toBeLessThanOrEqual(1)

      // and comes straight back when scrolling up
      await page.evaluate(() => window.scrollTo(0, document.querySelector('footer')!.getBoundingClientRect().top + window.scrollY - window.innerHeight))
      await page.waitForTimeout(600)
      n = await nav()
      expect(n.top, 'navbar did not return above the footer').toBeCloseTo(0, 0)
    })

    test('navbar: see-through over the hero, flips once to a white card, flips back at the hero', async ({ page }) => {
      await open(page, '/')
      const look = () =>
        page.evaluate(() => {
          const bar = document.querySelector('.nav__bar')!
          const card = bar.getBoundingClientRect()
          const logo = document.querySelector('.logo')!.getBoundingClientRect()
          const menu = document.querySelector('.nav__menu')!.getBoundingClientRect()
          return {
            tone: document.querySelector('.nav')!.getAttribute('data-tone'),
            bg: getComputedStyle(bar).backgroundColor,
            logoColor: getComputedStyle(document.querySelector('.logo')!).color,
            menuBg: getComputedStyle(document.querySelector('.nav__menu')!).backgroundColor,
            top: card.top, left: card.left, right: innerWidth - card.right,
            logoGap: logo.left - card.left, menuGap: card.right - menu.right,
            menuInside: menu.top >= card.top && menu.bottom <= card.bottom,
          }
        })

      // on the hero: no card, white pill
      let m = await look()
      expect(m.tone).toBe('dark')
      expect(m.bg, 'no card colour over the hero').toBe('rgba(0, 0, 0, 0)')
      expect(m.menuBg, 'Menu pill is white over the hero').toBe('rgb(255, 255, 255)')

      // past the hero: the white card, a dark pill, a gap on every side
      await page.evaluate(() => window.scrollTo(0, document.querySelector('.hero')!.getBoundingClientRect().height + 200))
      await page.waitForTimeout(500)
      m = await look()
      expect(m.tone).toBe('light')
      expect(m.bg).toBe('rgb(255, 255, 255)')
      expect(m.menuBg, 'Menu pill is dark on the white card').not.toBe('rgb(255, 255, 255)')
      expect(m.top, 'gap above the card').toBeGreaterThanOrEqual(8)
      expect(m.left, 'gap left of the card').toBeGreaterThanOrEqual(8)
      expect(m.right, 'gap right of the card').toBeGreaterThanOrEqual(8)
      expect(m.logoGap, 'logo is inside the card, with space around it').toBeGreaterThanOrEqual(12)
      expect(m.menuGap, 'Menu button is inside the card, with space around it').toBeGreaterThanOrEqual(12)
      expect(m.menuInside, 'Menu button fits inside the card').toBe(true)

      // back to the hero: flips back
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.waitForTimeout(500)
      m = await look()
      expect(m.tone).toBe('dark')
      expect(m.bg).toBe('rgba(0, 0, 0, 0)')
    })

    test('navbar: the menu opens from the middle of the page', async ({ page }) => {
      await open(page, '/')
      await page.evaluate(() => window.scrollTo(0, 2500))
      await page.waitForTimeout(400)
      await page.locator('.nav__menu').click()
      await expect(page.locator('.nav__menu')).toHaveAttribute('aria-expanded', 'true')
      await page.keyboard.press('Escape')
      await expect(page.locator('.nav__menu')).toHaveAttribute('aria-expanded', 'false')
    })

    test('anchor links land below the fixed navbar', async ({ page }) => {
      await open(page, '/services#cloud-architecture')
      await page.waitForTimeout(700)
      const m = await page.evaluate(() => ({ top: document.getElementById('cloud-architecture')!.getBoundingClientRect().top, bar: document.querySelector('.nav')!.getBoundingClientRect().bottom }))
      expect(m.top, 'section starts under the navbar').toBeGreaterThanOrEqual(m.bar - 1)
    })

    // ---------- Home hero ----------
    test('Home hero: copy and diagram are placed correctly and never overlap', async ({ page }) => {
      await open(page, '/')
      const m = await page.evaluate(() => {
        const R = (s: string) => { const r = document.querySelector(s)!.getBoundingClientRect(); return { l: r.left, r: r.right, t: r.top, b: r.bottom, w: r.width } }
        return { logo: R('.logo'), menu: R('.nav__menu'), copy: R('.hero__copy'), fig: R('svg.bp'), hero: R('.hero'), vw: innerWidth, vh: innerHeight }
      })
      const sideBySide = device.width >= 1024
      if (sideBySide) {
        expect(m.copy.l, 'copy starts on the logo line').toBeCloseTo(m.logo.l, 0)
        expect(m.fig.l, 'diagram overlaps the copy').toBeGreaterThanOrEqual(m.copy.r + 8)
        expect(m.fig.r, 'diagram sticks out past the Menu button side').toBeLessThanOrEqual(m.menu.r + 16)
        expect(m.copy.b, 'copy sits too close to the bottom of the screen').toBeLessThanOrEqual(m.vh - 60)
        expect(m.fig.w, 'diagram is too small for this screen').toBeGreaterThanOrEqual(Math.min(520, m.vw * 0.4))
      } else {
        expect(m.copy.b, 'on phones and tablets the text comes first, the diagram below').toBeLessThanOrEqual(m.fig.t + 1)
        expect(m.fig.r - m.fig.l).toBeLessThanOrEqual(m.vw)
      }
    })

    // ---------- touch devices ----------
    if (device.touch) {
      test('tap targets: primary buttons and Menu are at least 44px', async ({ page }) => {
        await open(page, '/')
        const small = await page.evaluate(() => {
          const out: string[] = []
          document.querySelectorAll('.hero .btn, .nav__menu').forEach((el) => {
            const r = el.getBoundingClientRect()
            if (!r.width) return
            if (r.height < 44 || r.width < 44) out.push(`${(el.textContent ?? '').trim().slice(0, 24) || el.className} is ${Math.round(r.width)}x${Math.round(r.height)}`)
          })
          return out
        })
        expect(small, small.join('\n')).toEqual([])
      })
    }
  })
}
