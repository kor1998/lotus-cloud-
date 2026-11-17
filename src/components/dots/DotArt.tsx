import { useMemo } from 'react'
import { isLand } from './world'
import { TREND_STAGES, WORLD } from './geometry'

/*
  Static dot-matrix artwork. Every field is generated once from a seeded generator (no Math.random),
  and drawn as a handful of <path> elements — one per dot size — so even thousands of dots stay cheap.
  A dot is a zero-length segment with a round cap. Nothing here animates.
*/
type Dot = [number, number]

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const pathOf = (dots: Dot[]) => dots.map(([x, y]) => `M${x.toFixed(1)} ${y.toFixed(1)}l0 0`).join('')

function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967296
  }
}

/* ---------------- halftone: dots that grow across a field ---------------- */
type Mode = 'ltr' | 'rtl' | 'ttb' | 'radial' | 'corner'

interface HalftoneProps {
  w?: number
  h?: number
  step?: number
  rmax?: number
  mode?: Mode
  color?: string
  seed?: number
  className?: string
}

export function Halftone({ w = 600, h = 400, step = 14, rmax = 5, mode = 'ltr', color = '#fff', seed = 3, className }: HalftoneProps) {
  const levels = useMemo(() => {
    const rand = rng(seed)
    const L = 6
    const buckets: Dot[][] = Array.from({ length: L }, () => [])
    for (let y = step / 2; y < h; y += step) {
      for (let x = step / 2; x < w; x += step) {
        const nx = x / w
        const ny = y / h
        let v: number
        if (mode === 'ltr') v = nx
        else if (mode === 'rtl') v = 1 - nx
        else if (mode === 'ttb') v = ny
        else if (mode === 'radial') v = 1 - Math.hypot(nx - 0.5, (ny - 0.5) * (h / w)) * 1.9
        else v = 1 - Math.hypot(1 - nx, 1 - ny) / 1.15
        v += (rand() - 0.5) * 0.3
        if (v < 0.1) continue
        buckets[Math.floor(clamp(v, 0, 0.999) * L)].push([x, y])
      }
    }
    return buckets.map((b, k) => ({ r: (rmax * (k + 1)) / L, d: pathOf(b) }))
  }, [w, h, step, rmax, mode, seed])

  return (
    <svg className={className} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {levels.map(({ r, d }, i) => (
        <path key={i} d={d} stroke={color} strokeWidth={r * 2} strokeLinecap="round" fill="none" />
      ))}
    </svg>
  )
}

/* ---------------- sphere: a dotted globe with land picked out ---------------- */
export function Sphere({ className, rot = 40, tilt = 22, color = '#fff' }: { className?: string; rot?: number; tilt?: number; color?: string }) {
  const { land, sea } = useMemo(() => {
    const R = 200
    const t = (tilt * Math.PI) / 180
    const land: Dot[][] = [[], [], [], []]
    const sea: Dot[] = []
    for (let lat = -84; lat <= 84; lat += 6) {
      const phi = (lat * Math.PI) / 180
      const lonStep = 6 / Math.max(Math.cos(phi), 0.25)
      for (let lon = -180; lon < 180; lon += lonStep) {
        const lam = ((lon + rot) * Math.PI) / 180
        const x = Math.cos(phi) * Math.sin(lam)
        const y = Math.sin(phi)
        const z = Math.cos(phi) * Math.cos(lam)
        const y2 = y * Math.cos(t) - z * Math.sin(t)
        const z2 = y * Math.sin(t) + z * Math.cos(t)
        if (z2 <= 0.04) continue
        const p: Dot = [210 + R * x, 210 - R * y2]
        if (isLand(lon, lat)) land[Math.min(3, Math.floor(z2 * 4))].push(p)
        else sea.push(p)
      }
    }
    return { land, sea }
  }, [rot, tilt])

  return (
    <svg className={className} viewBox="0 0 420 420" aria-hidden="true" focusable="false">
      <path d={pathOf(sea)} stroke={color} strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round" fill="none" />
      {land.map((d, i) => (
        <path key={i} d={pathOf(d)} stroke={color} strokeWidth={2 + i * 0.9} strokeLinecap="round" fill="none" />
      ))}
    </svg>
  )
}

/* ---------------- flat world map on a dot grid, with pins as HTML on top ---------------- */
export function WorldDots({ className, color = '#fff' }: { className?: string; color?: string }) {
  const { land, sea } = useMemo(() => {
    const land: Dot[] = []
    const sea: Dot[] = []
    for (let r = 0; r < WORLD.rows; r++) {
      for (let c = 0; c < WORLD.cols; c++) {
        const lon = -180 + c * 4 + 2
        const lat = WORLD.lat0 - r * 4 - 2
        const p: Dot = [c * WORLD.step + WORLD.step / 2, r * WORLD.step + WORLD.step / 2]
        ;(isLand(lon, lat) ? land : sea).push(p)
      }
    }
    return { land, sea }
  }, [])
  const W = WORLD.cols * WORLD.step
  const H = WORLD.rows * WORLD.step
  return (
    <svg className={className} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <path d={pathOf(sea)} stroke={color} strokeOpacity="0.14" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d={pathOf(land)} stroke={color} strokeWidth="3.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* ---------------- a rising dotted line (academy pathway) ---------------- */
export function Trend({ className }: { className?: string }) {
  const { line, drops } = useMemo(() => {
    const rand = rng(11)
    const key: Dot[] = [[0, 214], [200, 172], [400, 146], [600, 112], [800, 92], [1000, 52], [1200, 28]]
    const yAt = (x: number) => {
      for (let i = 1; i < key.length; i++) {
        if (x <= key[i][0]) {
          const [x0, y0] = key[i - 1]
          const [x1, y1] = key[i]
          return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0)
        }
      }
      return key[key.length - 1][1]
    }
    const line: Dot[] = []
    for (let x = 6; x < 1200; x += 10) line.push([x, yAt(x) + Math.sin(x * 0.05) * 8 + (rand() - 0.5) * 7])
    const drops: Dot[] = []
    for (const s of TREND_STAGES) for (let y = s.y + 22; y < 252; y += 13) drops.push([s.x, y])
    return { line, drops }
  }, [])
  return (
    <svg className={className} viewBox="0 0 1200 260" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <path d={pathOf(drops)} stroke="var(--brand)" strokeOpacity="0.3" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d={pathOf(line)} stroke="var(--brand)" strokeWidth="4.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}
