/*
  Section 2 — modelled on the Mindcloud "Trusted by" strip: a short left label,
  an evenly spaced row of marks, then the key numbers.
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

export function TrustStrip() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <div className="trust__inner wrap">
        <div className="trust__row">
          <p id="trust-title" className="trust__lead">
            Built on trusted
            <br />
            global platforms
          </p>
          <ul className="trust__logos">
            {PLATFORMS.map((p) => (
              <li key={p.name}>
                <img src={`/brand/icons/${p.icon}.svg`} alt="" width="22" height="22" />
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
