import type { CSSProperties } from 'react'
import { d, proj, type Origin, type Pt } from '../Hero/iso'

/*
  Large line illustrations for the menu cells (AccessGrid-style).
  Grey = construction lines, blue = the drawing. On cell hover the blue strokes
  redraw (.b), dashed paths travel (.flow), rings rotate (.spin) and nodes pulse (.pulse).
  The static state is always the fully drawn picture.
*/
export type ArtName = 'orbit' | 'stack' | 'pulse' | 'docs' | 'cloud' | 'blocks' | 'steps' | 'mesh' | 'globe'

const i = (n: number) => ({ '--i': n }) as CSSProperties

const ticks = (cx: number, cy: number, r1: number, r2: number, n: number) => {
  let out = ''
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2
    out += `M${(cx + Math.cos(a) * r1).toFixed(1)} ${(cy + Math.sin(a) * r1).toFixed(1)}L${(cx + Math.cos(a) * r2).toFixed(1)} ${(cy + Math.sin(a) * r2).toFixed(1)}`
  }
  return out
}

function Orbit() {
  const sats = [30, 120, 210, 300].map((a) => {
    const r = (a * Math.PI) / 180
    return { x: 180 + Math.cos(r) * 80, y: 112 + Math.sin(r) * 80, rx: 180 + Math.cos(r) * 52, ry: 112 + Math.sin(r) * 52 }
  })
  return (
    <>
      <circle className="g" cx="180" cy="112" r="102" />
      <circle className="g g--dash" cx="180" cy="112" r="80" />
      <path className="g" d={ticks(180, 112, 102, 109, 60)} />
      <path className="g g--dash" d="M60 112H300M180 6V218" />
      <g className="spin">
        <circle className="flow" cx="180" cy="112" r="36" />
      </g>
      <circle className="b" pathLength={1} cx="180" cy="112" r="52" style={i(0)} />
      <path className="b" pathLength={1} d="M164 112H196M180 96V128" style={i(2)} />
      <circle className="halo pulse" cx="180" cy="112" r="10" />
      <circle className="dot" cx="180" cy="112" r="7" />
      {sats.map((s, k) => (
        <g key={k}>
          <path className="b b--thin" pathLength={1} d={`M${s.rx.toFixed(1)} ${s.ry.toFixed(1)}L${s.x.toFixed(1)} ${s.y.toFixed(1)}`} style={i(3 + k)} />
          <circle className="b fillw" pathLength={1} cx={s.x} cy={s.y} r="11" style={i(4 + k)} />
          <circle className="dot" cx={s.x} cy={s.y} r="3.2" />
        </g>
      ))}
      <path className="b b--thin" pathLength={1} d="M126 60l-14-14M234 60l14-14M126 164l-14 14M234 164l14 14" style={i(8)} />
    </>
  )
}

function Stack() {
  const o: Origin = { cx: 180, cy: 168, k: 13 }
  const p = (x: number, y: number, z: number): Pt => proj(x, y, z, o)
  const H = 4.2
  const plate = (z: number) => d([p(-H, -H, z), p(H, -H, z), p(H, H, z), p(-H, H, z)], true)
  const edge = (z: number) => d([p(-H, H, z), p(-H, H, z + 0.35), p(H, H, z + 0.35), p(H, -H, z + 0.35), p(H, -H, z), p(H, H, z), p(-H, H, z)])
  const zs = [0, 3.6, 7.2]
  const cube = (z: number, s = 1.1, h = 1.3) =>
    d([p(-s, s, z), p(s, s, z), p(s, -s, z), p(s, -s, z + h), p(-s, -s, z + h), p(-s, s, z + h), p(-s, s, z)]) +
    d([p(-s, -s, z + h), p(s, -s, z + h), p(s, s, z + h), p(-s, s, z + h)], true) +
    d([p(s, s, z), p(s, s, z + h)])
  return (
    <>
      <path className="g" d={plate(-0.6)} />
      <path className="g g--dash" d={[p(-H, -H, 0), p(-H, -H, 7.2), p(H, -H, 0), p(H, -H, 7.2), p(H, H, 0), p(H, H, 7.2), p(-H, H, 0), p(-H, H, 7.2)].reduce((acc, pt, k) => acc + `${k % 2 ? 'L' : 'M'}${pt[0].toFixed(1)} ${pt[1].toFixed(1)}`, '')} />
      {zs.map((z, k) => (
        <g key={z}>
          <path className="b fillw" pathLength={1} d={plate(z)} style={i(k * 2)} />
          <path className="b b--thin" pathLength={1} d={edge(z)} style={i(k * 2 + 1)} />
          <path className="b b--thin" pathLength={1} d={d([p(-H, 0, z), p(H, 0, z)]) + d([p(0, -H, z), p(0, H, z)])} style={i(k)} />
        </g>
      ))}
      <path className="b fillw" pathLength={1} d={cube(7.2)} style={i(6)} />
      <path className="b b--thin" pathLength={1} d={cube(3.6, 0.8, 0.9)} style={i(7)} />
      <path className="b b--thin" pathLength={1} d={cube(0, 0.8, 0.9)} style={i(8)} />
      <path className="flow" d={d([p(0, 0, 8.8), p(0, 0, 0.4)])} />
      <circle className="halo pulse" cx={p(0, 0, 8.8)[0]} cy={p(0, 0, 8.8)[1]} r="9" />
      <circle className="dot" cx={p(0, 0, 8.8)[0]} cy={p(0, 0, 8.8)[1]} r="3.4" />
    </>
  )
}

function Pulse() {
  const grid: string[] = []
  for (let x = 20; x <= 340; x += 40) grid.push(`M${x} 30V200`)
  for (let y = 30; y <= 200; y += 34) grid.push(`M20 ${y}H340`)
  const bars = [10, 18, 12, 26, 20, 34, 22, 14, 28, 18, 12, 22]
  return (
    <>
      <path className="g" d={grid.join('')} />
      <circle className="g g--dash" cx="150" cy="72" r="44" />
      <circle className="g g--dash" cx="150" cy="72" r="26" />
      {bars.map((h, k) => (
        <rect key={k} className="b b--thin" pathLength={1} x={30 + k * 26} y={200 - h} width="14" height={h} rx="2" style={i(k % 6)} />
      ))}
      <path className="b" pathLength={1} d="M20 118H92l12 0 12-34 14 72 16-98 14 60h42l12-10 12 20 12-10h56" style={i(1)} />
      <path className="flow" d="M20 118H92l12 0 12-34 14 72 16-98 14 60h42l12-10 12 20 12-10h56" />
      <circle className="halo pulse" cx="146" cy="58" r="12" />
      <circle className="dot" cx="146" cy="58" r="5" />
      <path className="b b--thin" pathLength={1} d="M146 58V30M134 30h24" style={i(4)} />
    </>
  )
}

function Docs() {
  return (
    <>
      <rect className="g g--dash" x="118" y="30" width="136" height="168" rx="8" />
      <rect className="b b--thin fillw" pathLength={1} x="104" y="40" width="136" height="168" rx="8" style={i(0)} />
      <rect className="b fillw" pathLength={1} x="90" y="52" width="136" height="168" rx="8" style={i(1)} />
      <path className="b b--thin" pathLength={1} d="M108 82h60M108 100h96M108 114h84M108 128h96M108 142h70M108 170h96M108 184h54" style={i(2)} />
      <rect className="hl" x="104" y="94" width="104" height="12" rx="3" />
      <path className="b" pathLength={1} d="M108 100h96" style={i(3)} />
      <path className="flow" d="M208 100H270" />
      <circle className="b fillw" pathLength={1} cx="282" cy="100" r="12" style={i(4)} />
      <text className="art-text" x="282" y="104" textAnchor="middle">1</text>
      <path className="b b--thin" pathLength={1} d="M208 142H252" style={i(5)} />
      <circle className="b fillw" pathLength={1} cx="264" cy="142" r="12" style={i(6)} />
      <text className="art-text" x="264" y="146" textAnchor="middle">2</text>
      <g className="b-group">
        <path className="b" pathLength={1} d="M300 40v52M278 52h44M278 52l-12 24h24zM322 52l-12 24h24z" style={i(7)} />
        <path className="b b--thin" pathLength={1} d="M278 52l-12 24M278 52l12 24M322 52l-12 24M322 52l12 24" style={i(8)} />
      </g>
      <circle className="dot" cx="300" cy="40" r="3.4" />
    </>
  )
}

function Cloud() {
  const nodes: Pt[] = [[140, 100], [178, 84], [214, 104], [160, 120], [200, 124]]
  return (
    <>
      <path className="g" d="M20 190H340" />
      <circle className="g g--dash" cx="180" cy="96" r="84" />
      <path className="b fillw" pathLength={1} d="M105 128C80 128 78 92 102 88C100 58 140 46 156 70C172 44 218 52 222 88C252 86 258 128 228 128Z" style={i(0)} />
      <path className="b b--thin" pathLength={1} d="M140 100L178 84L214 104L200 124L160 120Z M178 84L160 120M178 84L200 124M140 100L214 104" style={i(2)} />
      {nodes.map(([x, y], k) => (
        <g key={k}>
          <circle className="b fillw" pathLength={1} cx={x} cy={y} r="7" style={i(3 + (k % 3))} />
          <circle className="dot" cx={x} cy={y} r="2.4" />
        </g>
      ))}
      <path className="flow" d="M150 132V160M180 132V160M210 132V160" />
      {[84, 138, 192, 246].map((x, k) => (
        <g key={x}>
          <rect className="b fillw" pathLength={1} x={x} y="160" width="48" height="30" rx="4" style={i(5 + k)} />
          <path className="b b--thin" pathLength={1} d={`M${x + 8} 170h22M${x + 8} 180h14`} style={i(6 + k)} />
          <circle className={k === 1 ? 'dot pulse' : 'dot'} cx={x + 38} cy="175" r="2.6" />
        </g>
      ))}
      <path className="b b--thin" pathLength={1} d="M108 160V148H252V160M180 128V148" style={i(9)} />
    </>
  )
}

function Blocks() {
  return (
    <>
      <path className="g g--dash" d="M30 200H330M30 30V200" />
      <rect className="b fillw" pathLength={1} x="58" y="30" width="244" height="156" rx="10" style={i(0)} />
      <path className="b b--thin" pathLength={1} d="M58 56H302M96 30V186" style={i(1)} />
      <circle className="dot" cx="74" cy="43" r="3" />
      <circle className="g-dot" cx="86" cy="43" r="3" />
      <path className="b b--thin" pathLength={1} d="M70 74h18M70 90h18M70 106h18M70 122h18" style={i(2)} />
      {[28, 44, 34, 62, 50, 78].map((h, k) => (
        <rect key={k} className="b" pathLength={1} x={116 + k * 24} y={170 - h} width="14" height={h} rx="2" style={i(3 + (k % 3))} />
      ))}
      <path className="flow" d="M112 110L140 98L164 104L190 78L214 90L240 66L262 74" />
      <path className="b b--thin" pathLength={1} d="M112 110L140 98L164 104L190 78L214 90L240 66L262 74" style={i(5)} />
      <rect className="b fillw" pathLength={1} x="232" y="112" width="86" height="62" rx="8" style={i(6)} />
      <circle className="b" pathLength={1} cx="252" cy="132" r="8" style={i(7)} />
      <circle className="b" pathLength={1} cx="270" cy="132" r="8" style={i(8)} />
      <path className="b b--thin" pathLength={1} d="M244 154h62M244 164h40" style={i(8)} />
      <path className="dot-fill" d="M252 84l22 12-9 3 5 9-5 2-5-9-8 6z" />
      <circle className="halo pulse" cx="252" cy="84" r="9" />
    </>
  )
}

function Steps() {
  return (
    <>
      <circle className="g g--dash" cx="60" cy="200" r="150" />
      <circle className="g g--dash" cx="60" cy="200" r="110" />
      <path className="g" d="M20 200H340" />
      <path className="b fillw" pathLength={1} d="M40 200V176H100V148H160V120H220V92H280V64H330V200Z" style={i(0)} />
      <path className="b b--thin" pathLength={1} d="M100 200V176M160 200V148M220 200V120M280 200V92" style={i(1)} />
      <path className="flow" d="M60 164C100 150 120 126 150 104C180 82 220 80 256 52" />
      {[[70, 170], [130, 142], [190, 114], [250, 86]].map(([x, y], k) => (
        <g key={k}>
          <circle className="b fillw" pathLength={1} cx={x} cy={y} r="6" style={i(2 + k)} />
          <circle className="dot" cx={x} cy={y} r="2" />
        </g>
      ))}
      <path className="b" pathLength={1} d="M306 64V28M306 28h26l-6 8 6 8h-26" style={i(7)} />
      <circle className="halo pulse" cx="306" cy="28" r="9" />
      <circle className="dot" cx="306" cy="28" r="3.4" />
    </>
  )
}

function Mesh() {
  const blobs: [number, number, number][] = [[128, 124, 34], [178, 88, 28], [214, 140, 32], [160, 168, 20], [244, 96, 18], [110, 70, 14]]
  return (
    <>
      <circle className="g" cx="180" cy="112" r="100" />
      <circle className="g g--dash" cx="180" cy="112" r="76" />
      <path className="g g--dash" d="M60 112H300M180 12V212M95 27L265 197" />
      {blobs.map(([x, y, r], k) => (
        <g key={k}>
          <circle className="b fillw" pathLength={1} cx={x} cy={y} r={r} style={i(k)} />
          {r > 18 && <circle className="b b--thin" pathLength={1} cx={x} cy={y} r={r * 0.55} style={i(k + 2)} />}
        </g>
      ))}
      <g className="spin">
        <circle className="flow" cx="180" cy="112" r="100" />
      </g>
      <circle className="halo pulse" cx="214" cy="140" r="8" />
      <circle className="dot" cx="214" cy="140" r="3.6" />
    </>
  )
}

function Globe() {
  const pts: Pt[] = [[120, 90], [226, 70], [250, 150], [150, 164]]
  return (
    <>
      <circle className="g" cx="180" cy="112" r="92" />
      <ellipse className="g" cx="180" cy="112" rx="60" ry="92" />
      <ellipse className="g" cx="180" cy="112" rx="28" ry="92" />
      <path className="g" d="M88 112H272M100 70H260M100 154H260" />
      <path className="g g--dash" d="M40 112H320M180 6V218" />
      <path className="b" pathLength={1} d="M120 90Q170 30 226 70" style={i(0)} />
      <path className="b" pathLength={1} d="M226 70Q276 110 250 150" style={i(1)} />
      <path className="b" pathLength={1} d="M250 150Q200 190 150 164" style={i(2)} />
      <path className="b" pathLength={1} d="M150 164Q110 140 120 90" style={i(3)} />
      <path className="flow" d="M120 90Q170 30 226 70Q276 110 250 150" />
      {pts.map(([x, y], k) => (
        <g key={k}>
          <circle className={k === 1 ? 'halo pulse' : 'halo'} cx={x} cy={y} r="11" />
          <circle className="b fillw" pathLength={1} cx={x} cy={y} r="5.5" style={i(4 + k)} />
          <circle className="dot" cx={x} cy={y} r="2" />
        </g>
      ))}
    </>
  )
}

const ARTS: Record<ArtName, () => React.JSX.Element> = {
  orbit: Orbit, stack: Stack, pulse: Pulse, docs: Docs, cloud: Cloud, blocks: Blocks, steps: Steps, mesh: Mesh, globe: Globe,
}

export function Art({ name, fill = false, center = false }: { name: ArtName; fill?: boolean; center?: boolean }) {
  const Draw = ARTS[name]
  return (
    <svg className="art" viewBox="0 0 360 220" preserveAspectRatio={fill ? 'xMidYMid slice' : center ? 'xMidYMid meet' : 'xMidYMax meet'} aria-hidden="true" focusable="false">
      <Draw />
    </svg>
  )
}
