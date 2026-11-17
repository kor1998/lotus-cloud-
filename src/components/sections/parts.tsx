import type { ReactNode } from 'react'

export const Arrow = () => (
  <svg viewBox="0 0 14 10" width="13" height="9" aria-hidden="true">
    <path d="M1 5h11M8 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Section heading: one h2 and one short paragraph. Optional action sits on the right. */
export function Head({ id, title, lede, action, kicker }: { id: string; title: string; lede?: string; action?: ReactNode; kicker?: string }) {
  return (
    <header className="head">
      <div className="head__text">
        {kicker && <p className="kicker">{kicker}</p>}
        <h2 id={id} className="head__title">
          {title}
        </h2>
        {lede && <p className="head__lede">{lede}</p>}
      </div>
      {action && <div className="head__action">{action}</div>}
    </header>
  )
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="tlink" href={href}>
      {children}
      <Arrow />
    </a>
  )
}

/** Two-letter monogram tile (same device the live site uses). */
export const Mono = ({ children }: { children: string }) => (
  <span className="mono-tile" aria-hidden="true">
    {children}
  </span>
)
