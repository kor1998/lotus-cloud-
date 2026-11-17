/*
  Section 2: a centred heading, then the platform names drifting past in a seamless marquee.
  The list is rendered four times, enough to fill even a very wide screen, so the loop has no seam; the extra copies are hidden from screen readers.
  The marquee stops on hover/focus, and is replaced by a static, wrapped row for visitors who prefer reduced motion.
  Each name carries its real brand icon (public/brand/icons).
*/
const PLATFORMS = [
  { name: 'Google Cloud', icon: 'google-cloud' },
  { name: 'Google Workspace', icon: 'google-workspace' },
  { name: 'Vertex AI', icon: 'vertex-ai' },
  { name: 'Gemini', icon: 'gemini' },
  { name: 'BigQuery', icon: 'bigquery' },
  { name: 'Firebase', icon: 'firebase' },
] as const

function Logos({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee__list" aria-hidden={hidden || undefined}>
      {PLATFORMS.map((p) => (
        <li key={p.name} className="marquee__item">
          <img src={`/brand/icons/${p.icon}.svg`} alt="" width="26" height="26" />
          {p.name}
        </li>
      ))}
    </ul>
  )
}

export function TrustStrip() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <div className="wrap">
        <p id="trust-title" className="trust__title">
          Built on trusted global platforms
        </p>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          <Logos />
          <Logos hidden />
          <Logos hidden />
          <Logos hidden />
        </div>
      </div>
    </section>
  )
}
