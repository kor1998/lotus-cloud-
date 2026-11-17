import { Logo } from '../Logo'
import { CONSULT, ECOSYSTEM, FOOTER, LEADER } from '../../content/home'
import { Halftone } from '../dots/DotArt'
import { Head } from './parts'

/** Section: the call to action, on a dark blueprint panel that echoes the hero. */
export function Consultation({ id }: { id?: string }) {
  return (
    <section id={id} className="sec sec--paper sec--tight" aria-labelledby="consult-title">
      <div className="wrap">
        <div className="consult">
          <Halftone className="consult__dots" w={620} h={420} step={15} rmax={5.2} mode="ltr" seed={2} />
          <p className="consult__chip">{CONSULT.label}</p>
          <h2 id="consult-title" className="consult__title">
            {CONSULT.title}
          </h2>
          <p className="consult__text">{CONSULT.desc}</p>
          <div className="consult__actions">
            <a className="btn btn--solid" href={CONSULT.primary.href}>
              {CONSULT.primary.label}
            </a>
            <a className="btn btn--ghost" href={CONSULT.secondary.href}>
              {CONSULT.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Section: the technology ecosystem. */
export function Ecosystem() {
  return (
    <section className="sec sec--white" aria-labelledby="eco-title">
      <div className="wrap">
        <Head id="eco-title" title={ECOSYSTEM.title} lede={ECOSYSTEM.lede} />
        <ul className="ebento">
          {ECOSYSTEM.items.map((c, i) => (
            <li key={c.title} className={`b e${i + 1}`}>
              <div className={i === 0 ? 'tile tile--blue' : 'tile tile--light'}>
                {i === 0 && <Halftone className="tile__dots tile__dots--br" w={420} h={300} step={14} rmax={4.6} mode="corner" seed={6} />}
                <span className="brand-tile">
                  <img src={c.icon} alt="" width="28" height="28" loading="lazy" />
                </span>
                <h3 className="tile__title">{c.title}</h3>
                <p className="tile__text">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Leadership: a photo card with the headline over it, beside a dark card with the profile and credentials. */
export function Leadership({ id }: { id?: string }) {
  const [about1, about2, vision] = LEADER.paragraphs
  return (
    <section id={id} className="sec sec--white" aria-labelledby="leader-title">
      <div className="wrap">
        <header className="fhead">
          <p className="fhead__label">
            <span className="fhead__dot" aria-hidden="true" />
            Leadership
          </p>
          <h2 id="leader-title" className="fhead__title">
            {LEADER.title}
          </h2>
        </header>

        <div className="fgrid">
          <figure className="fphoto">
            <img src="/brand/leader.jpg" width="1000" height="1000" alt="Dr. Veera B. Dasari, CEO and Chief Architect of Lotus Cloud" loading="lazy" />
          </figure>

          <div className="fcard fcard--profile">
            <h3 className="fname">{LEADER.name}</h3>
            <p className="frole">{LEADER.role}</p>
            <div className="fabout">
              <p>{about1}</p>
              <p>{about2}</p>
            </div>
            <blockquote className="fquote">
              <span className="fquote__mark" aria-hidden="true">
                &rdquo;
              </span>
              <p>{vision}</p>
            </blockquote>
          </div>

          <div className="fcard fcard--creds">
            <h3 className="fpill">Credentials</h3>
            <ul className="fbullets">
              {LEADER.badges.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="fcard fcard--cta">
            <a className="lead__btn lead__btn--solid" href={LEADER.primary.href}>
              {LEADER.primary.label}
              <svg viewBox="0 0 14 10" width="13" height="9" aria-hidden="true">
                <path d="M1 5h11M8 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="lead__btn lead__btn--line" href={LEADER.secondary.href}>
              {LEADER.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: (
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.82-2 3.74-2 4 0 4.75 2.6 4.75 6V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z" />
  ),
  YouTube: (
    <path d="M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 002.4 7.2C2 8.76 2 12 2 12s0 3.24.4 4.8a2.5 2.5 0 001.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 001.76-1.77C22 15.24 22 12 22 12s0-3.24-.4-4.8zM10 15V9l5.2 3z" />
  ),
  GitHub: (
    <path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.1-4.55-4.93 0-1.1.4-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0012 2z" />
  ),
}

/** Footer: quiet and open (Mindcloud-style columns), then an oversized wordmark that closes the page (Steel-style). */
export function Footer() {
  const groups = FOOTER.groups.filter((g) => g.title !== 'Legal')
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <div>
              <Logo />
              <p className="footer__blurb">{FOOTER.blurb}</p>
            </div>
            <div className="footer__contact">
              <p>
                <strong>Headquarters</strong>
                {FOOTER.hq}
              </p>
              <p>
                <strong>Contact</strong>
                <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
              </p>
            </div>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            {groups.map((g) => (
              <div key={g.title}>
                <h2 className="footer__h">{g.title}</h2>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__base">
          <div className="footer__left">
            <p>© 2026 Lotus Cloud Inc. All rights reserved.</p>
            <ul className="footer__legal">
              <li>
                <a href="/privacy">Privacy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/contact#support">Support</a>
              </li>
            </ul>
          </div>
          <ul className="footer__social">
            {FOOTER.social.map((x) => (
              <li key={x.label}>
                <a href={x.href} rel="noopener noreferrer" aria-label={x.label}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    {SOCIAL_ICONS[x.label]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__mark" aria-hidden="true">
        <span>Lotus Cloud</span>
      </div>
    </footer>
  )
}
