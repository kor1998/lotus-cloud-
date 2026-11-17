import { expect, test } from '@playwright/test'
import { ROUTES } from './devices'

/* SEO: every page has its own title, description, canonical address and share tags. Runs once per page (no device matrix). */
const titles = new Map<string, string>()

for (const route of ROUTES) {
  test(`${route}: title, description, canonical and share tags`, async ({ page }) => {
    await page.goto(route)
    await page.waitForSelector('h1')
    const m = await page.evaluate(() => {
      const c = (s: string, a: string) => document.head.querySelector(s)?.getAttribute(a) ?? ''
      return {
        title: document.title,
        description: c('meta[name="description"]', 'content'),
        canonical: c('link[rel="canonical"]', 'href'),
        robots: c('meta[name="robots"]', 'content'),
        ogTitle: c('meta[property="og:title"]', 'content'),
        ogDesc: c('meta[property="og:description"]', 'content'),
        ogUrl: c('meta[property="og:url"]', 'content'),
        ogImage: c('meta[property="og:image"]', 'content'),
        twitter: c('meta[name="twitter:card"]', 'content'),
        noAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).length,
        lang: document.documentElement.lang,
      }
    })
    const noindex = route === '/login'
    expect(m.title.length, 'title length').toBeGreaterThan(10)
    expect(m.title.length, 'title too long for search results').toBeLessThanOrEqual(80)
    expect(m.description.length, 'description length').toBeGreaterThanOrEqual(30)
    expect(m.description.length, 'description too long').toBeLessThanOrEqual(160)
    expect(m.canonical).toBe(`https://lotuscloud.ai${route === '/' ? '/' : route}`)
    expect(m.ogUrl).toBe(m.canonical)
    expect(m.ogTitle).toBe(m.title)
    expect(m.ogDesc).toBe(m.description)
    expect(m.ogImage).toBe('https://lotuscloud.ai/og-image.png')
    expect(m.twitter).toBe('summary_large_image')
    expect(m.robots).toContain(noindex ? 'noindex' : 'index')
    expect(m.noAlt, 'images without alt text').toBe(0)
    expect(m.lang).toBe('en')
    if (!noindex) {
      expect(titles.get(m.title), `duplicate title also on ${titles.get(m.title)}`).toBeUndefined()
      titles.set(m.title, route)
    }
  })
}

test('robots.txt and sitemap.xml are served', async ({ request }) => {
  const robots = await (await request.get('/robots.txt')).text()
  expect(robots).toContain('Sitemap: https://lotuscloud.ai/sitemap.xml')
  const xml = await (await request.get('/sitemap.xml')).text()
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  expect(locs).toHaveLength(ROUTES.length - 1) // every page except /login
  expect(locs).not.toContain('https://lotuscloud.ai/login')
  expect((await request.get('/og-image.png')).ok()).toBe(true)
})
