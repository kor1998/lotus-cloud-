import { expect, test } from '@playwright/test'

/* Motion budget: the endless animations pause when nobody can see them and switch off on weak computers. */
test.use({ viewport: { width: 1440, height: 900 } })

const lights = () =>
  document.getAnimations().filter((a) => (a.effect as KeyframeEffect | null)?.target?.closest?.('.bp--lights'))

test('endless animations run on the hero, pause when it is scrolled away, resume when it returns', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('.bp--lights')
  await page.waitForTimeout(3600)
  const running = () => page.evaluate((fn) => new Function(`return (${fn})()`)().filter((a: Animation) => a.playState === 'running').length, lights.toString())
  expect(await running(), 'light loops should be running at the top of the page').toBeGreaterThan(0)

  await page.evaluate(() => window.scrollTo(0, 3000))
  await page.waitForTimeout(500)
  expect(await running(), 'loops must pause when the hero is off screen').toBe(0)

  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(500)
  expect(await running(), 'loops must resume when the hero is back').toBeGreaterThan(0)
})

test('lite mode (weak computers) removes the endless light layer', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('.bp--lights')
  await page.evaluate(() => (document.documentElement.dataset.motion = 'lite'))
  const display = await page.evaluate(() => getComputedStyle(document.querySelector('.bp--lights')!).display)
  expect(display).toBe('none')
})

test('the light layer sits exactly on top of the drawing', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('.bp--lights')
  const r = await page.evaluate(() => {
    const a = document.querySelector('svg.bp:not(.bp--lights)')!.getBoundingClientRect()
    const b = document.querySelector('.bp--lights')!.getBoundingClientRect()
    return { dl: Math.abs(a.left - b.left), dt: Math.abs(a.top - b.top), dw: Math.abs(a.width - b.width), dh: Math.abs(a.height - b.height) }
  })
  expect(Math.max(r.dl, r.dt, r.dw, r.dh)).toBeLessThanOrEqual(1)
})
