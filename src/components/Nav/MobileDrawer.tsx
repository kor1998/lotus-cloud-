import { useEffect, useRef, useState } from 'react'
import { MENU } from './menuData'

interface Props {
  open: boolean
  onClose: () => void
}

/*
  Phone / small-tablet menu: white sheet, drill-down.
  Items with several destinations open a second level; single-page items link straight through.
*/
export function MobileDrawer({ open, onClose }: Props) {
  const [viewId, setViewId] = useState<string | null>(null)
  const [lastId, setLastId] = useState<string>(MENU[0].id)
  const rootRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLButtonElement>(null)

  const active = MENU.find((m) => m.id === lastId) ?? MENU[0]

  // Lock page scroll and make the page behind inert while open; reset to level 1 on close.
  useEffect(() => {
    document.documentElement.toggleAttribute('data-scroll-locked', open)
    document.getElementById('main')?.toggleAttribute('inert', open)
    if (!open) {
      const t = window.setTimeout(() => setViewId(null), 250)
      return () => window.clearTimeout(t)
    }
    rootRef.current?.querySelector<HTMLElement>('button, a')?.focus({ preventScroll: true })
  }, [open])

  useEffect(() => {
    return () => {
      document.documentElement.removeAttribute('data-scroll-locked')
      document.getElementById('main')?.removeAttribute('inert')
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const openView = (id: string) => {
    setLastId(id)
    setViewId(id)
    window.setTimeout(() => backRef.current?.focus({ preventScroll: true }), 30)
  }

  const closeView = () => {
    const id = viewId
    setViewId(null)
    window.setTimeout(() => {
      if (id) document.getElementById(`m-trigger-${id}`)?.focus({ preventScroll: true })
    }, 30)
  }

  const hasDetail = (id: string) => {
    const m = MENU.find((x) => x.id === id)
    return !!m && (m.cells.length > 1 || !!m.more)
  }

  return (
    <div
      id="mobile-nav"
      ref={rootRef}
      className="drawer"
      data-open={open}
      data-view={viewId ? 'detail' : 'root'}
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      inert={!open}
    >
      <div className="drawer__track">
        <div className="drawer__pane" inert={viewId !== null}>
          <ul className="drawer__list">
            {MENU.map((item) => (
              <li key={item.id}>
                {hasDetail(item.id) ? (
                  <button id={`m-trigger-${item.id}`} className="drawer__row" type="button" onClick={() => openView(item.id)}>
                    {item.label}
                    <svg viewBox="0 0 8 14" width="8" height="14" aria-hidden="true">
                      <path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <a className="drawer__row" href={item.href} onClick={onClose}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="drawer__cta">
            <a className="btn btn--dark" href="/contact" onClick={onClose}>
              Talk to Lotus Cloud
            </a>
          </div>
        </div>

        <div className="drawer__pane" inert={viewId === null}>
          <button ref={backRef} className="drawer__back" type="button" onClick={closeView}>
            <svg viewBox="0 0 8 14" width="8" height="14" aria-hidden="true">
              <path d="M7 1L1 7l6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All menus
          </button>
          <h2 className="drawer__title">{active.label}</h2>
          <ul className="drawer__list drawer__list--links">
            {active.cells.map((cell) => (
              <li key={cell.title}>
                <a className="drawer__link" href={cell.href} onClick={onClose}>
                  <span className="drawer__link-label">{cell.title}</span>
                  <span className="drawer__link-desc">{cell.desc}</span>
                </a>
              </li>
            ))}
            {active.more?.map((m) => (
              <li key={m.href}>
                <a className="drawer__link" href={m.href} onClick={onClose}>
                  <span className="drawer__link-label">{m.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a className="drawer__all" href={active.href} onClick={onClose}>
            All {active.label.toLowerCase()}
          </a>
        </div>
      </div>
    </div>
  )
}
