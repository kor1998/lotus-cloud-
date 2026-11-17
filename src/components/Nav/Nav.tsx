import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Logo } from '../Logo'
import { Art } from './Art'
import { MobileDrawer } from './MobileDrawer'
import { MENU, PROMO } from './menuData'
import { useMediaQuery } from './useMediaQuery'

const Chevron = () => (
  <svg viewBox="0 0 8 12" width="7" height="11" aria-hidden="true">
    <path d="M1.5 1.5L6 6l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

type Tone = 'dark' | 'light'

/** Is the page behind this point dark or light? (inside the hero gradient it depends on how far down we are) */
function toneAt(x: number, y: number): Tone {
  for (const el of document.elementsFromPoint(x, y)) {
    if (el.closest('.nav, .os-scrollbar')) continue
    const hero = el.closest('.hero, .phero')
    if (hero) {
      const r = hero.getBoundingClientRect()
      return (y - r.top) / r.height < 0.78 ? 'dark' : 'light'
    }
    for (let a: Element | null = el; a && a !== document.documentElement; a = a.parentElement) {
      const cs = getComputedStyle(a)
      const src = cs.backgroundImage !== 'none' ? cs.backgroundImage : cs.backgroundColor
      const m = src.match(/rgba?\(([^)]+)\)/)
      if (!m) continue
      const [r, g, b, alpha = '1'] = m[1].split(',').map((v) => parseFloat(v))
      if (Number(alpha) < 0.5) continue
      return 0.2126 * r + 0.7152 * g + 0.0722 * b < 140 ? 'dark' : 'light'
    }
  }
  return 'light'
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('platforms')
  const [tone, setTone] = useState<Tone>('dark') // the whole bar is either the dark-page look or the white-page look
  const { pathname } = useLocation()
  const [away, setAway] = useState(false) // the footer has come into view: it slides out of the way
  const isDesktop = useMediaQuery('(min-width: 900px)')
  const headerRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const hoverTimer = useRef<number | undefined>(undefined)
  const lastPointer = useRef<string>('mouse')

  const active = MENU.find((m) => m.id === activeId) ?? MENU[0]

  const close = (returnFocus = false) => {
    setOpen(false)
    if (returnFocus) menuBtnRef.current?.focus()
  }

  // The bar stays on screen all the way down the page (transparent: only the logo and buttons change colour).
  // It slides away only when the footer arrives.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const bar = headerRef.current
      if (bar) {
        // The bar has two looks and flips once. Dark look (white logo and button) while the dark hero is behind it;
        // when the white page reaches the bar it flips to the light look and stays that way down the page.
        // Scrolling back up to the hero resets it. Other dark cards and bands further down never change it.
        const y = (bar.offsetHeight || 60) / 2
        const hero = document.querySelector('.hero, .phero')
        let next: Tone
        if (hero) {
          const r = hero.getBoundingClientRect()
          next = y >= r.top && (y - r.top) / r.height < 0.78 ? 'dark' : 'light'
        } else {
          next = toneAt(window.innerWidth * 0.5, y) // pages without a hero: follow the page colour at the top
        }
        setTone((t) => (t === next ? t : next))
      }
      const footer = document.querySelector('footer')
      setAway(!!footer && footer.getBoundingClientRect().top <= window.innerHeight * 0.75)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const ro = new ResizeObserver(onScroll) // lazy page content changes the layout after load
    ro.observe(document.body)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      ro.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  // Esc closes the desktop panel (the mobile drawer handles its own Esc).
  useEffect(() => {
    if (!open || !isDesktop) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, isDesktop])

  // Click outside the header (or on the scrim) closes the panel.
  useEffect(() => {
    if (!open || !isDesktop) return
    const onDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open, isDesktop])

  const choose = (id: string) => {
    window.clearTimeout(hoverTimer.current)
    setActiveId(id)
  }

  return (
    <header ref={headerRef} className="nav" data-open={open} data-tone={tone} data-away={away}>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <div className="nav__bar wrap">

        <Logo />

        <div className="nav__actions">
          <button
            ref={menuBtnRef}
            className="nav__menu"
            type="button"
            aria-expanded={open}
            aria-controls={isDesktop ? 'menu-panel' : 'mobile-nav'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__menu-label">{open ? 'Close' : 'Menu'}</span>
            <span className="nav__lines" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      {isDesktop ? (
        <>
          <div className="nav__scrim" data-open={open} aria-hidden="true" />
          <div id="menu-panel" className="menu" data-open={open} inert={!open} role="region" aria-label="Site menu">
            <div className="menu__inner">
            <nav className="menu__nav" aria-label="Primary">
              <ul className="menu__list">
                {MENU.map((item) => (
                  <li key={item.id}>
                    <a
                      className="menu__item"
                      href={item.href}
                      aria-current={item.id === activeId ? 'true' : undefined}
                      onPointerDown={(e) => (lastPointer.current = e.pointerType)}
                      onPointerEnter={(e) => {
                        if (e.pointerType !== 'mouse') return
                        window.clearTimeout(hoverTimer.current)
                        hoverTimer.current = window.setTimeout(() => setActiveId(item.id), 60)
                      }}
                      onFocus={() => choose(item.id)}
                      onClick={(e) => {
                        // touch: first tap previews the item, second tap opens the page
                        if (lastPointer.current === 'touch' && item.id !== activeId) {
                          e.preventDefault()
                          choose(item.id)
                          return
                        }
                        close()
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="menu__foot">
                <a className="menu__cta" href="/contact" onClick={() => close()}>
                  Talk to Lotus Cloud
                </a>
                <ul className="menu__legal">
                  <li>
                    <a href="/privacy" onClick={() => close()}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" onClick={() => close()}>
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="menu__stage" key={active.id}>
              <div className="menu__cells" data-n={active.cells.length}>
                {active.cells.map((cell, idx) => (
                  <a key={cell.title} className="cell" href={cell.href} onClick={() => close()}>
                    <span className="cell__head">
                      <span className="cell__title">
                        {cell.title}
                        {cell.tag && <span className="cell__tag">{cell.tag}</span>}
                      </span>
                      <span className="cell__desc">{cell.desc}</span>
                    </span>
                    <span className="cell__art">
                      <Art name={cell.art} fill={active.cells.length === 3 && idx > 0} />
                    </span>
                  </a>
                ))}
              </div>

              {active.more && (
                <div className="menu__more">
                  <span className="menu__more-label">{active.moreLabel}</span>
                  <ul>
                    {active.more.map((m) => (
                      <li key={m.href}>
                        <a href={m.href} onClick={() => close()}>
                          {m.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="menu__promo">
                <span className="menu__promo-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
                    <path d="M3.5 10h17M8 3v4M16 3v4" />
                  </svg>
                </span>
                <span className="menu__promo-text">
                  <strong>{PROMO.title}</strong>
                  <span>{PROMO.desc}</span>
                </span>
                <a className="menu__promo-cta" href={PROMO.href} onClick={() => close()}>
                  {PROMO.cta}
                  <Chevron />
                </a>
              </div>
            </div>
            </div>
          </div>
        </>
      ) : (
        <MobileDrawer open={open} onClose={() => close(true)} />
      )}
    </header>
  )
}
