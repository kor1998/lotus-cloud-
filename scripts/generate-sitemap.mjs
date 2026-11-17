// Writes public/sitemap.xml from the page list in src/content/pages/index.ts (runs before every build).
// Set SITE_URL in the environment if the domain is not https://lotuscloud.ai.
import { readFileSync, writeFileSync } from 'node:fs'

const SITE = (process.env.SITE_URL || 'https://lotuscloud.ai').replace(/\/$/, '')
const index = readFileSync(new URL('../src/content/pages/index.ts', import.meta.url), 'utf8')
const contentPaths = [...index.matchAll(/^\s*'(\/[^']*)':/gm)].map((m) => m[1])
const paths = ['/', ...contentPaths, '/contact'] // /login and the 404 page stay out of search
const today = new Date().toISOString().slice(0, 10)

const urls = paths
  .map((p) => `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p === '/' ? '1.0' : '0.7'}</priority>\n  </url>`)
  .join('\n')
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log(`sitemap.xml: ${paths.length} pages for ${SITE}`)
