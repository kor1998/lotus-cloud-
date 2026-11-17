import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Nav } from './Nav/Nav'
import { Footer } from './sections/Close'
import { useOverlayScrollbars } from '../lib/useOverlayScrollbars'

/*
  Shared frame for every route: navbar, <main id="main"> (the mobile menu makes it inert while open),
  footer. Two small behaviours live here so the rest of the code can keep using plain <a href="/…">:
    • internal links navigate without a page reload
    • a new page opens at the top; a link with a #hash scrolls to that section
*/
function useInternalLinks() {
  const navigate = useNavigate()
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest('a')
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return
      const href = a.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return
      e.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])
}

function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    let tries = 0
    let raf = 0
    const go = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) el.scrollIntoView({ block: 'start' })
      else if (tries++ < 30) raf = requestAnimationFrame(go)
    }
    go()
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])
}

export function Layout() {
  useOverlayScrollbars()
  useInternalLinks()
  useScrollOnNavigate()
  return (
    <>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
