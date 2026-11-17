import { Art, type ArtName } from '../Nav/Art'
import { Halftone, Sphere } from '../dots/DotArt'
import { ACADEMY, OFFER, PLATFORMS, RESEARCH } from '../../content/home'
import { Arrow, Head, TextLink } from './parts'

/** Five service lines as a bento: one blue lead card, one night card, three light cards. */
export function Offer() {
  const c = OFFER.cards
  const tile = (i: number, cls: string, tone: string, art?: React.ReactNode) => (
    <li className={`b ${cls}`}>
      <a className={`tile ${tone}`} href={c[i].href}>
        {art}
        <h3 className="tile__title">{c[i].title}</h3>
        <p className="tile__text">{c[i].desc}</p>
        <span className="tile__go">
          Explore
          <svg viewBox="0 0 14 10" width="13" height="9" aria-hidden="true">
            <path d="M1 5h11M8 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </li>
  )
  return (
    <section className="sec sec--paper" aria-labelledby="offer-title">
      <div className="wrap">
        <Head id="offer-title" title={OFFER.title} lede={OFFER.lede} />
        <ul className="bento bento--offer">
          {tile(0, 'o1', 'tile--blue', <Halftone className="tile__dots tile__dots--br" w={520} h={420} step={15} rmax={5.2} mode="corner" />)}
          {tile(1, 'o2', 'tile--light')}
          {tile(2, 'o3', 'tile--light')}
          {tile(3, 'o4', 'tile--night', <Halftone className="tile__dots tile__dots--r" w={360} h={260} step={14} rmax={4.4} mode="rtl" color="#2f5bff" seed={9} />)}
          {tile(4, 'o5', 'tile--light')}
        </ul>

        <div className="partner">
          <img className="partner__badge" src="/brand/google-cloud-partner.png" width="240" height="120" alt="Google Cloud Partner" loading="lazy" />
          <div>
            <p className="partner__title">{OFFER.partner.title}</p>
            <p className="partner__text">{OFFER.partner.desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/** One platform per full-width row, picture and text side by side, alternating sides. */
const ROW_TONE = ['tile--night on-dark', 'tile--light', 'tile--blue on-blue'] as const

export interface PlatformRowData {
  kind: string
  title: string
  tagline: string
  desc: string
  note: string
  cta: string
  href: string
  art: ArtName
}

export function PlatformRows({ rows }: { rows: PlatformRowData[] }) {
  return (
    <div className="prows">
      {rows.map((p, i) => (
        <article key={p.title} className={`tile prow ${ROW_TONE[i % 3]}${i % 3 === 1 ? ' prow--flip' : ''}`}>
          <div className="prow__text">
            <span className="pill-tag">Flagship</span>
            <p className="prow__kind">{p.kind}</p>
            <h3 className="prow__title">{p.title}</h3>
            <p className="prow__tagline">{p.tagline}</p>
            <p className="prow__desc">{p.desc}</p>
            <div className="prow__foot">
              <p className="prow__note">{p.note}</p>
              <a className="prow__cta" href={p.href}>
                {p.cta}
                <svg viewBox="0 0 14 10" width="13" height="9" aria-hidden="true">
                  <path d="M1 5h11M8 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="prow__art">
            <Art name={p.art} center />
          </div>
        </article>
      ))}
    </div>
  )
}

/** Home: the flagship platforms. */
export function Platforms() {
  return (
    <section className="sec sec--white" aria-labelledby="platforms-title">
      <div className="wrap">
        <Head id="platforms-title" title={PLATFORMS.title} lede={PLATFORMS.lede} action={<TextLink href={PLATFORMS.all.href}>{PLATFORMS.all.label}</TextLink>} />
        <PlatformRows rows={PLATFORMS.cards} />
      </div>
    </section>
  )
}

/** Academy: three programmes as large ruled rows, each one a link. */
export function Academy() {
  return (
    <section className="sec sec--paper" aria-labelledby="academy-title">
      <div className="wrap">
        <Head
          id="academy-title"
          kicker={ACADEMY.label}
          title={ACADEMY.title}
          lede={ACADEMY.lede}
          action={
            <a className="btn btn--dark" href={ACADEMY.cta.href}>
              {ACADEMY.cta.label}
            </a>
          }
        />
        <ol className="arows">
          {ACADEMY.programs.map((p, i) => (
            <li key={p.title}>
              <a className="arow" href={p.href}>
                <span className="rowcode" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="arow__title">{p.title}</h3>
                <p className="arow__text">{p.desc}</p>
                <span className="arow__go">
                  Explore program
                  <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** Research: a night card with a dotted globe, and a blue card with a halftone field. */
export function Research() {
  const [ihmds, phys] = RESEARCH.panels
  return (
    <section className="sec sec--white" aria-label="Research">
      <div className="wrap rgrid">
        <article className="tile tile--night rtile">
          <Sphere className="rtile__sphere" rot={-40} tilt={20} />
          <div className="rtile__text">
            <p className="kicker kicker--dark">{ihmds.label}</p>
            <h2 className="rtile__title">{ihmds.title}</h2>
            <p className="tile__text">{ihmds.desc}</p>
          </div>
          <a className="tile__go tile__go--solid" href={ihmds.cta.href}>
            {ihmds.cta.label}
          </a>
        </article>
        <article className="tile tile--blue rtile">
          <Halftone className="rtile__dots" w={560} h={460} step={15} rmax={5.4} mode="radial" seed={5} />
          <div className="rtile__text">
            <p className="kicker kicker--dark">{phys.label}</p>
            <h2 className="rtile__title">{phys.title}</h2>
            <p className="tile__text">{phys.desc}</p>
          </div>
          <a className="tile__go tile__go--solid" href={phys.cta.href}>
            {phys.cta.label}
          </a>
        </article>
      </div>
    </section>
  )
}
