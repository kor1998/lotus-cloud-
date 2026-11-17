import { useEffect } from 'react'
import { OG_IMAGE, SITE_NAME, SITE_URL } from './site'

interface PageMeta {
  title: string
  description: string
  /** the page's own path, e.g. "/about" (no domain) */
  path: string
  /** keep the page out of search results (sign-in, 404) */
  noindex?: boolean
}

/** Search engines show about 155 characters: cut on a word, never mid-word. */
export function shorten(text: string, max = 155) {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  return t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…'
}

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

const meta = (key: 'name' | 'property', name: string) => () => {
  const el = document.createElement('meta')
  el.setAttribute(key, name)
  return el
}

/** Sets the title, description, canonical link, social-share tags and robots rule for the page being shown. */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta) {
  useEffect(() => {
    const url = SITE_URL + (path === '/' ? '/' : path)
    const desc = shorten(description)
    document.title = title
    setTag('meta[name="description"]', meta('name', 'description'), 'content', desc)
    setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url)
    setTag('meta[name="robots"]', meta('name', 'robots'), 'content', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setTag('meta[property="og:type"]', meta('property', 'og:type'), 'content', 'website')
    setTag('meta[property="og:site_name"]', meta('property', 'og:site_name'), 'content', SITE_NAME)
    setTag('meta[property="og:title"]', meta('property', 'og:title'), 'content', title)
    setTag('meta[property="og:description"]', meta('property', 'og:description'), 'content', desc)
    setTag('meta[property="og:url"]', meta('property', 'og:url'), 'content', url)
    setTag('meta[property="og:image"]', meta('property', 'og:image'), 'content', OG_IMAGE)
    setTag('meta[name="twitter:card"]', meta('name', 'twitter:card'), 'content', 'summary_large_image')
    setTag('meta[name="twitter:title"]', meta('name', 'twitter:title'), 'content', title)
    setTag('meta[name="twitter:description"]', meta('name', 'twitter:description'), 'content', desc)
    setTag('meta[name="twitter:image"]', meta('name', 'twitter:image'), 'content', OG_IMAGE)
  }, [title, description, path, noindex])
}
