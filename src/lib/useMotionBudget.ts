import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
  Motion budget. The page has a few endless animations (the line of light on the hero diagram, the logo marquee).
  They are free on a good computer and a constant drain on a weak one, so this hook controls them:

    • off-screen or in a background tab  → paused (CSS reads data-inview on .hero / .marquee, data-hidden on <html>)
    • weak device (4 GB RAM or less, 2 cores or fewer, Data Saver on) → <html data-motion="lite">: no endless motion
    • any device that turns out to be slow → a short frame-rate check after load switches it to "lite" too
    • prefers-reduced-motion is handled in the CSS and always wins

  Everything is plain CSS driven by these three attributes; there is no animation code running per frame.
*/
type Nav = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } }

const KEY = 'lc-motion'

export function useMotionBudget() {
  const { pathname } = useLocation()

  // 1. device class + background tab: once for the whole app
  useEffect(() => {
    const root = document.documentElement
    const nav = navigator as Nav
    let remembered = ''
    try {
      remembered = sessionStorage.getItem(KEY) ?? ''
    } catch {
      /* storage can be blocked: the check below simply runs again */
    }
    const weak = (nav.deviceMemory ?? 8) <= 4 || (nav.hardwareConcurrency ?? 8) <= 2 || !!nav.connection?.saveData
    root.dataset.motion = weak || remembered === 'lite' ? 'lite' : 'full'

    const onVisibility = () => {
      root.dataset.hidden = String(document.hidden)
    }
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)

    // 2. frame-rate check: if the page cannot keep up even when idle, drop the endless motion
    let raf = 0
    let timer = 0
    const probe = () => {
      if (root.dataset.motion === 'lite' || document.hidden) return
      let frames = 0
      let slow = 0
      let last = performance.now()
      const tick = (t: number) => {
        if (document.hidden) return
        slow += t - last > 24 ? 1 : 0 // slower than ~40 fps
        frames++
        last = t
        if (frames < 90) raf = requestAnimationFrame(tick)
        else if (slow / frames > 0.35) {
          root.dataset.motion = 'lite'
          try {
            sessionStorage.setItem(KEY, 'lite')
          } catch {
            /* ignore */
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }
    timer = window.setTimeout(probe, 4500) // after the intro animation, while the loops are running

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      cancelAnimationFrame(raf)
      window.clearTimeout(timer)
    }
  }, [])

  // 2. pause the endless animations while they are off screen (re-attached for every page)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) (e.target as HTMLElement).dataset.inview = String(e.isIntersecting)
    })
    document.querySelectorAll('.hero, .marquee').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
