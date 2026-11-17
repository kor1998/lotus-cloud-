import { useState } from 'react'
import { WorldDots } from '../dots/DotArt'
import { lonLatToPct } from '../dots/geometry'
import { FOOTPRINT, INDUSTRIES, SERVICES, WHY } from '../../content/home'
import { Arrow, Head } from './parts'

/** Why Lotus Cloud: four open numerals between hairlines, then six reasons as ruled rows. */
export function Why() {
  return (
    <section className="sec sec--paper" aria-labelledby="why-title">
      <div className="wrap">
        <Head id="why-title" title={WHY.title} lede={WHY.lede} />
        <dl className="statrow">
          {WHY.stats.map((s) => (
            <div key={s.value} className="statrow__item">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="rrows">
          {WHY.cards.map((c) => (
            <li key={c.title} className="rrow">
              <span className="rowcode" aria-hidden="true">
                {c.mono}
              </span>
              <h3 className="rrow__title">{c.title}</h3>
              <p className="rrow__text">{c.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const slug = (t: string) => t.toLowerCase().replace(/\s+/g, '-')

/** Eight industries as a ruled list: each row opens that sector on the Industries page. */
export function Industries() {
  return (
    <section className="sec sec--white" aria-labelledby="industries-title">
      <div className="wrap">
        <Head id="industries-title" title={INDUSTRIES.title} lede={INDUSTRIES.lede} />
        <ul className="irows">
          {INDUSTRIES.items.map((c) => (
            <li key={c.title}>
              <a className="irow" href={`/industries#${slug(c.title)}`}>
                <span className="rowcode" aria-hidden="true">
                  {c.mono}
                </span>
                <h3 className="irow__title">{c.title}</h3>
                <p className="irow__text">{c.desc}</p>
                <span className="irow__arrow" aria-hidden="true">
                  <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Eleven services in one blue card: one row open at a time, like a task list. */
export function EnterpriseServices() {
  const [open, setOpen] = useState(0)
  return (
    <section className="sec sec--paper" aria-labelledby="services-title">
      <div className="wrap split split--wide">
        <div className="split__side">
          <h2 id="services-title" className="head__title">
            {SERVICES.title}
          </h2>
          <p className="head__lede">{SERVICES.lede}</p>
          <a className="btn btn--dark split__cta" href={SERVICES.cta.href}>
            {SERVICES.cta.label}
          </a>
        </div>
        <div className="tile tile--blue stasks">
          <p className="stasks__count">{SERVICES.items.length} services</p>
          <ul className="stasks__list">
            {SERVICES.items.map((s, i) => {
              const isOpen = open === i
              return (
                <li key={s.title} className="stasks__row" data-open={isOpen}>
                  <h3>
                    <button className="stasks__btn" type="button" aria-expanded={isOpen} aria-controls={`svc-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                      <span className="stasks__dot" aria-hidden="true" />
                      <span className="stasks__title">{s.title}</span>
                      <svg className="stasks__chev" viewBox="0 0 14 10" width="14" height="10" aria-hidden="true">
                        <path d="M1 3l6 5 6-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>
                  <div id={`svc-${i}`} className="stasks__panel" role="region" inert={!isOpen}>
                    <p className="stasks__desc">{s.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

/** Regions: a night card with a dot-matrix world map and six pins. */
export function Footprint({ id }: { id?: string }) {
  return (
    <section id={id} className="sec sec--white" aria-labelledby="footprint-title">
      <div className="wrap">
        <div className="tile tile--night fprint">
          <div className="fprint__head">
            <h2 id="footprint-title" className="fprint__title">
              {FOOTPRINT.title}
            </h2>
            <p className="tile__text">{FOOTPRINT.lede}</p>
          </div>
          <div className="fprint__map">
            <WorldDots className="fprint__dots" />
            <ul className="pins">
              {FOOTPRINT.regions.map((r) => {
                const { x, y } = lonLatToPct(r.lon, r.lat)
                return (
                  <li key={r.name} className={`pin pin--${r.side}`} style={{ left: `${x}%`, top: `${y}%` }}>
                    <span className="pin__ring" aria-hidden="true" />
                    <span className="pin__label">{r.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
