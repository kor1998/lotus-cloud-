import { Halftone } from '../dots/DotArt'
import type { PageData } from '../../content/pages/types'

/*
  Compact intro for every inner page: the same black → blue field, grid and rails as the home hero,
  but short, and with a quiet dot field on the right instead of the drawing. It ends in a soft fade
  into the page colour, with no text inside the pale part.
*/
export function PageHero({ hero }: { hero: PageData['hero'] }) {
  return (
    <section className="phero" aria-labelledby="page-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__rails" aria-hidden="true" />
      <Halftone className="phero__dots" w={640} h={380} step={15} rmax={5} mode="corner" seed={8} />
      <div className="phero__inner wrap">
        {hero.eyebrow && (
          <p className="hero__chip">
            <span className="hero__chip-dot" aria-hidden="true" />
            {hero.eyebrow}
          </p>
        )}
        <h1 id="page-title" className="phero__title">
          {hero.title}
        </h1>
        {hero.lede && <p className="phero__lede">{hero.lede}</p>}
        {hero.actions && (
          <div className="phero__actions">
            {hero.actions.map((a, i) => (
              <a key={a.href + a.label} className={i === 0 ? 'btn btn--solid' : 'btn btn--ghost'} href={a.href}>
                {a.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
