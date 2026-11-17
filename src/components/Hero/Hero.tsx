import { BlueprintDiagram } from './BlueprintDiagram'

const Arrow = () => (
  <svg viewBox="0 0 14 10" width="13" height="9" aria-hidden="true">
    <path d="M1 5h11M8 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/*
  Layout: the drawing is large and sits high on the right; the heading, paragraph and buttons
  sit at the bottom-left (see hero.css for the grid).
*/
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__rails" aria-hidden="true" />

      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="hero__chip">
            <span className="hero__chip-dot" aria-hidden="true" />
            Google Cloud Partner
          </p>
          <h1 id="hero-title" className="hero__title">
            One enterprise ecosystem for intelligent transformation.
          </h1>
          <p className="hero__lede">
            Lotus Cloud builds Agentic AI and healthcare AI platforms, cloud and enterprise solutions, professional
            education, and applied research.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="/platforms">
              Explore Platforms
              <Arrow />
            </a>
            <a className="btn btn--ghost" href="/academy">
              Explore Academy
            </a>
          </div>
        </div>

        <div className="hero__figure">
          <BlueprintDiagram />
        </div>
      </div>
    </section>
  )
}
