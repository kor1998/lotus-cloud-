import { useState } from 'react'
import { Halftone } from '../dots/DotArt'
import { Consultation, Leadership } from '../sections/Close'
import { PlatformRows } from '../sections/Offer'
import { Footprint } from '../sections/Proof'
import { Head, Mono, TextLink } from '../sections/parts'
import type { Block, CardItem, HeadData } from '../../content/pages/types'

function PageHead({ id, head }: { id: string; head: HeadData }) {
  return (
    <Head
      id={`${id}-title`}
      kicker={head.kicker}
      title={head.title}
      lede={head.lede}
      action={
        head.action && (
          <a className="btn btn--dark" href={head.action.href}>
            {head.action.label}
          </a>
        )
      }
    />
  )
}

function Card({ item, lead = false }: { item: CardItem; lead?: boolean }) {
  const tone = item.tone ?? (lead ? 'blue' : 'light')
  return (
    <article className={`tile tile--${tone}${lead ? ' tile--lead' : ''}`}>
      {lead && <Halftone className="tile__dots tile__dots--br" w={460} h={380} step={15} rmax={5} mode="corner" seed={7} />}
      {item.mono && <Mono>{item.mono}</Mono>}
      {item.tag && <p className="ctag">{item.tag}</p>}
      <h3 className="tile__title">{item.title}</h3>
      {item.text && <p className="tile__text">{item.text}</p>}
      {item.bullets && (
        <ul className="cbullets">
          {item.bullets.map((b, n) => (
            <li key={`${n}-${b}`}>{b}</li>
          ))}
        </ul>
      )}
      {item.note && <p className="cnote">{item.note}</p>}
      {item.cta && (
        <a className="tile__go" href={item.cta.href}>
          {item.cta.label}
          <svg viewBox="0 0 14 10" width="13" height="9" aria-hidden="true">
            <path d="M1 5h11M8 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </article>
  )
}

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="tile tile--blue stasks">
      <ul className="stasks__list">
        {items.map((s, i) => {
          const isOpen = open === i
          return (
            <li key={s.q} className="stasks__row" data-open={isOpen}>
              <h3>
                <button className="stasks__btn" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="stasks__dot" aria-hidden="true" />
                  <span className="stasks__title">{s.q}</span>
                  <svg className="stasks__chev" viewBox="0 0 14 10" width="14" height="10" aria-hidden="true">
                    <path d="M1 3l6 5 6-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </h3>
              <div className="stasks__panel" role="region" inert={!isOpen}>
                <p className="stasks__desc">{s.a}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/** Which page colour each block sits on. Fixed blocks decide their own; the rest alternate. */
const FIXED: Partial<Record<Block['type'], 'paper' | 'white'>> = { leader: 'paper', footprint: 'white', consult: 'paper' }

function backgrounds(blocks: Block[]): ('paper' | 'white')[] {
  const out: ('paper' | 'white')[] = []
  let next: 'paper' | 'white' = 'paper'
  for (const b of blocks) {
    const here: 'paper' | 'white' = FIXED[b.type] ?? next
    out.push(here)
    next = here === 'paper' ? 'white' : 'paper'
  }
  return out
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  const bgs = backgrounds(blocks)
  return (
    <>
      {blocks.map((b, i) => {
        const cls = `sec sec--${bgs[i]}`
        const id = ('id' in b && b.id) || `block-${i}`
        switch (b.type) {
          case 'leader':
            return <Leadership key={i} id={b.id} />
          case 'footprint':
            return <Footprint key={i} id={b.id} />
          case 'consult':
            return <Consultation key={i} id={b.id} />
          case 'rows':
            return (
              <section key={i} id={b.id} className="sec sec--white" aria-labelledby={`${id}-title`}>
                <div className="wrap">
                  {b.head && <PageHead id={id} head={b.head} />}
                  <PlatformRows rows={b.rows} />
                </div>
              </section>
            )
          case 'cards':
            return (
              <section key={i} id={b.id} className={cls} aria-labelledby={b.head ? `${id}-title` : undefined}>
                <div className="wrap">
                  {b.head && <PageHead id={id} head={b.head} />}
                  <ul className={`cgrid cgrid--${b.layout}`}>
                    {b.items.map((it, k) => (
                      <li key={`${it.title}-${k}`} id={it.id} className={`b c${k + 1}`}>
                        <Card item={it} lead={b.layout === 'lead' && k === 0} />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )
          case 'steps':
            return (
              <section key={i} id={b.id} className={cls} aria-labelledby={`${id}-title`}>
                <div className="wrap">
                  <PageHead id={id} head={b.head} />
                  <ol className="steps">
                    {b.steps.map((s, k) => (
                      <li key={`${s.title}-${k}`} className="steps__item">
                        <span className="steps__num">{String(k + 1).padStart(2, '0')}</span>
                        <h3 className="tile__title">{s.title}</h3>
                        <p className="card__text">{s.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            )
          case 'list':
            return (
              <section key={i} id={b.id} className={cls} aria-labelledby={`${id}-title`}>
                <div className="wrap">
                  <PageHead id={id} head={b.head} />
                  <ul className="rlist">
                    {b.items.map((it, k) => (
                      <li key={`${it.title}-${k}`} id={it.id} className="rlist__item">
                        <h3 className="rlist__title">{it.title}</h3>
                        <div>
                          {it.text && <p className="card__text">{it.text}</p>}
                          {it.bullets && (
                            <ul className="cbullets">
                              {it.bullets.map((x, n) => (
                                <li key={`${n}-${x}`}>{x}</li>
                              ))}
                            </ul>
                          )}
                          {it.cta && <TextLink href={it.cta.href}>{it.cta.label}</TextLink>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )
          case 'split':
            return (
              <section key={i} id={b.id} className={cls} aria-labelledby={`${id}-title`}>
                <div className="wrap split split--wide">
                  <div className="split__side">
                    <h2 id={`${id}-title`} className="head__title">
                      {b.head.title}
                    </h2>
                    {b.head.lede && <p className="head__lede">{b.head.lede}</p>}
                    {b.head.action && (
                      <a className="btn btn--dark split__cta" href={b.head.action.href}>
                        {b.head.action.label}
                      </a>
                    )}
                  </div>
                  <ul className="rlist rlist--one">
                    {b.items.map((s, k) => (
                      <li key={`${s.title}-${k}`} className="rlist__item">
                        <h3 className="rlist__title">{s.title}</h3>
                        <p className="card__text">{s.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )
          case 'accordion':
            return (
              <section key={i} id={b.id} className={cls} aria-labelledby={`${id}-title`}>
                <div className="wrap split split--wide">
                  <div className="split__side">
                    <h2 id={`${id}-title`} className="head__title">
                      {b.head.title}
                    </h2>
                    {b.head.lede && <p className="head__lede">{b.head.lede}</p>}
                  </div>
                  <Accordion items={b.items} />
                </div>
              </section>
            )
          case 'prose':
            return (
              <section key={i} id={b.id} className="sec sec--white">
                <div className="wrap">
                  <div className="prose">
                    {b.sections.map((s, k) => (
                      <section key={k} className="prose__sec">
                        {s.heading && <h2 className="prose__h">{s.heading}</h2>}
                        {s.paragraphs?.map((p, n) => (
                          <p key={`${n}-${p.slice(0, 24)}`}>{p}</p>
                        ))}
                        {s.bullets && (
                          <ul>
                            {s.bullets.map((x, n) => (
                              <li key={`${n}-${x}`}>{x}</li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}
                  </div>
                </div>
              </section>
            )
        }
      })}
    </>
  )
}
