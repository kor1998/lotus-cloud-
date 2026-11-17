import { useState } from 'react'
import { Halftone, WorldDots } from '../dots/DotArt'
import { lonLatToPct } from '../dots/geometry'
import { FOOTPRINT, INDUSTRIES, SERVICES, WHY } from '../../content/home'
import { Head, Mono } from './parts'

/** Why Lotus Cloud: big numerals in a dashboard-style bento, then six reasons as a ruled list. */
export function Why() {
  const [years, solutions, partner, delivery] = WHY.stats
  return (
    <section className="sec sec--paper" aria-labelledby="why-title">
      <div className="wrap">
        <Head id="why-title" title={WHY.title} lede={WHY.lede} />
        <div className="wbento">
          <div className="tile tile--light wb1">
            <p className="num">{years.value}</p>
            <p className="num__label">{years.label}</p>
          </div>
          <div className="tile tile--blue wb2">
            <Halftone className="tile__dots tile__dots--br" w={420} h={300} step={14} rmax={4.6} mode="corner" seed={4} />
            <p className="num">{solutions.value}</p>
            <p className="num__label">{solutions.label}</p>
          </div>
          <div className="tile tile--light wb3">
            <img className="wb3__badge" src="/brand/google-cloud-partner.png" width="240" height="120" alt="" loading="lazy" />
            <p className="num__label">
              {partner.value} {partner.label}
            </p>
          </div>
          <div className="tile tile--night wb4">
            <WorldDots className="wb4__map" />
            <p className="num num--sm">{delivery.value}</p>
            <p className="num__label">{delivery.label}</p>
          </div>
        </div>

        <ul className="reasons">
          {WHY.cards.map((c) => (
            <li key={c.title} className="reasons__item">
              <Mono>{c.mono}</Mono>
              <h3 className="card__title">{c.title}</h3>
              <p className="card__text">{c.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Eight industries as a bento: Healthcare leads in blue, Nonprofit closes on night. */
export function Industries() {
  return (
    <section className="sec sec--white" aria-labelledby="industries-title">
      <div className="wrap">
        <Head id="industries-title" title={INDUSTRIES.title} lede={INDUSTRIES.lede} />
        <ul className="ibento">
          {INDUSTRIES.items.map((c, i) => {
            const tone = i === 0 ? 'tile--blue' : i === 7 ? 'tile--night' : 'tile--light'
            return (
              <li key={c.title} className={`b i${i + 1}`}>
                <div className={`tile ${tone}`}>
                  {i === 0 && <Halftone className="tile__dots tile__dots--br" w={460} h={380} step={15} rmax={5} mode="corner" seed={7} />}
                  <Mono>{c.mono}</Mono>
                  <h3 className="tile__title">{c.title}</h3>
                  <p className="tile__text">{c.desc}</p>
                </div>
              </li>
            )
          })}
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
