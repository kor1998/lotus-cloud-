import { forwardRef, useEffect } from 'react'
import { d, leftFaceMatrix, proj, rightFaceMatrix, topFaceMatrix, type Pt } from './iso'

/*
  PADMA supervisor + four agents, drawn as an isometric blueprint on a stacked slab
  (Doss-style: solid blue cubes, white edges, an icon on every cube).
  Motion is deliberately short:
    • strokes draw on once at load            (.edge)
    • slabs build up, then cubes drop in one by one (.rise / .module)
    • a line of light runs along each trace, forever, one after another (.route-flow)
    • the supervisor ring turns twice         (.ring-spin)
  No dots, no endless loops. All of it is off under prefers-reduced-motion.
*/

const W = 860
const H = 660
const O = { cx: W / 2, cy: 292, k: 30 }
const p = (x: number, y: number, z = 0): Pt => proj(x, y, z, O)

// tight crop around the drawing so the SVG box has no big empty margins
const VB = { x: 22, y: 20, w: 826, h: 622 }

const ROUTE_START = 3.1 // seconds: when the first line of light starts (the loop is 3.6s long, see hero.css)
const ROUTE_STAGGER = 0.9 // each trace fires a beat after the previous one

const PLATE = 7.6
const THICK = 0.5
const GRID_STEP = 1.9
const AG = 5.6

type Glyph = 'db' | 'flow' | 'shield' | 'bars'

interface BoxSpec {
  id: string
  cx: number
  cy: number
  size: number
  h: number
  delay: number
  title: string
  code: string
  glyph?: Glyph
  variant: 'agent' | 'supervisor'
}

const BOXES: BoxSpec[] = [
  { id: 'data', cx: -AG, cy: -AG, size: 3, h: 1.5, delay: 1.0, title: 'DATA', code: 'A-01', glyph: 'db', variant: 'agent' },
  { id: 'workflow', cx: AG, cy: -AG, size: 3, h: 1.5, delay: 1.15, title: 'WORKFLOW', code: 'A-02', glyph: 'flow', variant: 'agent' },
  { id: 'security', cx: -AG, cy: AG, size: 3, h: 1.5, delay: 1.3, title: 'SECURITY', code: 'A-04', glyph: 'shield', variant: 'agent' },
  { id: 'supervisor', cx: 0, cy: 0, size: 4, h: 2.6, delay: 0.55, title: 'PADMA', code: 'SUPERVISOR', variant: 'supervisor' },
  { id: 'insight', cx: AG, cy: AG, size: 3, h: 1.5, delay: 1.45, title: 'INSIGHT', code: 'A-03', glyph: 'bars', variant: 'agent' },
]

// Orthogonal traces from the supervisor to each agent (world coords, z = 0).
const ROUTES: { id: string; pts: Pt[]; delay: number }[] = [
  { id: 'data', pts: [[-1.9, -0.7], [-AG, -0.7], [-AG, -4.1]], delay: 1.6 },
  { id: 'workflow', pts: [[1.9, -0.7], [AG, -0.7], [AG, -4.1]], delay: 1.7 },
  { id: 'security', pts: [[-0.7, 1.9], [-0.7, AG], [-4.1, AG]], delay: 1.8 },
  { id: 'insight', pts: [[0.7, 1.9], [0.7, AG], [4.1, AG]], delay: 1.9 },
]

// Small line icons drawn around (0,0) in a ~30px box, laid flat on each cube's top face.
const GLYPHS: Record<Glyph, string> = {
  db: 'M-12 -9a12 5 0 1 0 24 0a12 5 0 1 0 -24 0M-12 -9v18a12 5 0 0 0 24 0v-18M-12 0a12 5 0 0 0 24 0',
  flow: 'M-17 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0M8 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0M-8 0h16M2.5 -3.5l3.5 3.5-3.5 3.5',
  shield: 'M0 -14L12 -9V2C12 9 6 13 0 16C-6 13 -12 9 -12 2V-9ZM-5 1l4 4 7-9',
  bars: 'M-14 13h28M-11 13v-8h6v8M-3 13v-14h6v14M5 13v-21h6v21',
}

function ring(r: number, z: number, steps = 72): string {
  const pts: Pt[] = []
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2
    pts.push(p(Math.cos(a) * r, Math.sin(a) * r, z))
  }
  return d(pts, true)
}

const dl = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

/** A flat slab: top face at z, thickness below it. */
function Slab({ z, under = false, delay }: { z: number; under?: boolean; delay: number }) {
  const top = d([p(-PLATE, -PLATE, z), p(PLATE, -PLATE, z), p(PLATE, PLATE, z), p(-PLATE, PLATE, z)], true)
  const left = d([p(-PLATE, PLATE, z - THICK), p(PLATE, PLATE, z - THICK), p(PLATE, PLATE, z), p(-PLATE, PLATE, z)], true)
  const right = d([p(PLATE, -PLATE, z - THICK), p(PLATE, PLATE, z - THICK), p(PLATE, PLATE, z), p(PLATE, -PLATE, z)], true)
  const cls = under ? 'edge edge--plate' : 'edge'
  return (
    <g className="rise" style={dl(delay)}>
      <g className="faces fade-in" style={dl(delay)}>
        <path d={right} fill={under ? 'var(--slab-under)' : 'var(--slab-right)'} />
        <path d={left} fill={under ? 'var(--slab-under)' : 'var(--slab-left)'} />
        <path d={top} fill={under ? 'var(--slab-under)' : 'url(#g-slab-top)'} />
      </g>
      <g style={dl(delay)}>
        <path className={cls} pathLength={1} d={top} />
        <path className={cls} pathLength={1} d={left} />
        <path className={cls} pathLength={1} d={right} />
      </g>
    </g>
  )
}

/** The three visible faces of a cube, as path data. */
function boxFaces(b: BoxSpec) {
  const half = b.size / 2
  const [x0, x1, y0, y1] = [b.cx - half, b.cx + half, b.cy - half, b.cy + half]
  return {
    right: d([p(x1, y0), p(x1, y1), p(x1, y1, b.h), p(x1, y0, b.h)], true),
    left: d([p(x0, y1), p(x1, y1), p(x1, y1, b.h), p(x0, y1, b.h)], true),
    top: d([p(x0, y0, b.h), p(x1, y0, b.h), p(x1, y1, b.h), p(x0, y1, b.h)], true),
  }
}

function Module({ b }: { b: BoxSpec }) {
  const half = b.size / 2
  const [x0, x1, y0, y1] = [b.cx - half, b.cx + half, b.cy - half, b.cy + half]
  const sup = b.variant === 'supervisor'
  const delay = dl(b.delay)
  const labelDelay = dl(b.delay + 0.9)

  const { right, left, top } = boxFaces(b)

  // Local text frames: origin at the top-left of each visible face.
  const [lx, ly] = p(x0, y1, b.h)
  const [rx, ry] = p(x1, y1, b.h)
  const faceW = b.size * O.k
  const faceH = b.h * O.k
  const [tx, ty] = p(b.cx, b.cy, b.h)
  const sh = 0.4
  const shadow = d([p(x0 + sh, y0 + sh), p(x1 + sh, y0 + sh), p(x1 + sh, y1 + sh), p(x0 + sh, y1 + sh)], true)

  return (
    <g className="module" data-id={b.id} style={dl(b.delay - 0.15)}>
      <path className="shadow fade-in" d={shadow} style={delay} />
      <g className="faces fade-in" style={delay}>
        <path d={right} fill="url(#g-cube-right)" />
        <path d={left} fill="url(#g-cube-left)" />
        <path d={top} fill="url(#g-cube-top)" />
      </g>
      <g className="edges" style={delay}>
        <path className="edge edge--cube-side" pathLength={1} d={right} />
        <path className="edge edge--cube-side" pathLength={1} d={left} />
        <path className="edge edge--cube" pathLength={1} d={top} />
      </g>
      {sup ? (
        <g className="fade-in" style={labelDelay}>
          <path className="edge edge--dim" pathLength={1} d={ring(1.55, b.h)} />
          <path className="edge edge--dim ring-spin" d={ring(1.0, b.h)} />
          <path className="edge edge--dim" pathLength={1} d={ring(0.45, b.h)} />
        </g>
      ) : (
        <g className="fade-in" style={labelDelay}>
          {b.glyph && <path className="glyph" transform={`${topFaceMatrix(tx, ty)} scale(1.32)`} d={GLYPHS[b.glyph]} />}
        </g>
      )}

      <g className="fade-in plate" style={labelDelay}>
        {/* name plate on the left face */}
        <g transform={leftFaceMatrix(lx, ly)}>
          <text className="label" x="12" y={sup ? 30 : 20}>
            {b.title}
          </text>
          <text className="label label--sub" x="12" y={sup ? 47 : 33}>
            {sup ? 'SUPERVISOR' : b.code}
          </text>
          {sup && <line className="rule" x1="12" x2={faceW - 12} y1={faceH - 12} y2={faceH - 12} />}
        </g>
        {/* status bars on the right face (lines, not dots) */}
        <g transform={rightFaceMatrix(rx, ry)}>
          <rect className="pill" x="10" y={faceH - 25} width="50" height="14" rx="7" />
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              className={i === 0 ? 'bar bar--on' : 'bar'}
              x1={21 + i * 13}
              x2={27 + i * 13}
              y1={faceH - 18}
              y2={faceH - 18}
            />
          ))}
          {sup && (
            <text className="label label--sub" x={faceW - 12} y={faceH - 12} textAnchor="end">
              ROOT
            </text>
          )}
        </g>
      </g>
    </g>
  )
}

/**
 * Animations are timed by the clock, so on a busy computer a long first frame would swallow the whole intro and the
 * drawing would just appear. This waits until the fonts are in and the browser has really painted the page, then
 * flags <html data-ready>; the CSS holds every intro animation until then, so it always starts from its first frame.
 */
function useIntroGate() {
  useEffect(() => {
    const root = document.documentElement
    if (root.dataset.ready === 'true') return
    let raf = 0
    let timer = 0
    const go = () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(() => {
          root.dataset.ready = 'true'
        })
      })
    }
    timer = window.setTimeout(go, 1200) // never wait longer than this for fonts
    document.fonts?.ready.then(go, go)
    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [])
}

export const BlueprintDiagram = forwardRef<SVGSVGElement>(function BlueprintDiagram(_, ref) {
  useIntroGate()
  const gridLines: string[] = []
  for (let v = -PLATE + GRID_STEP; v < PLATE - 0.01; v += GRID_STEP) {
    gridLines.push(d([p(v, -PLATE), p(v, PLATE)]))
    gridLines.push(d([p(-PLATE, v), p(PLATE, v)]))
  }

  const routePaths = ROUTES.map((r) => ({ ...r, d: d(r.pts.map(([x, y]) => p(x, y))) }))

  const tick = (x: number, y: number) => {
    const [sx, sy] = p(x, y)
    return d([[sx - 9, sy], [sx + 9, sy]]) + d([[sx, sy - 9], [sx, sy + 9]])
  }

  const [callX, callY] = p(2, -2, 2.6)
  const callTop = callY - 74

  return (
    <>
    <svg
      ref={ref}
      className="bp"
      viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`}
      role="img"
      aria-labelledby="bp-title bp-desc"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="bp-title">PADMA supervisor orchestrating four agents</title>
      <desc id="bp-desc">
        Isometric blueprint on a stacked slab: the PADMA supervisor connects to a Data agent, a Workflow agent, an
        Insight agent and a Security agent.
      </desc>

      <defs>
        <linearGradient id="g-cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6a98ff" />
          <stop offset="1" stopColor="#2c63fb" />
        </linearGradient>
        <linearGradient id="g-cube-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2459f6" />
          <stop offset="1" stopColor="#173fcb" />
        </linearGradient>
        <linearGradient id="g-cube-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a49d4" />
          <stop offset="1" stopColor="#0d2a96" />
        </linearGradient>
        <radialGradient id="g-slab-top" cx="50%" cy="45%" r="75%">
          <stop offset="0" stopColor="#0f35bc" />
          <stop offset="1" stopColor="#061a78" />
        </radialGradient>
        <radialGradient id="bp-fade" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="bp-grid-mask">
          <rect width={W} height={H} fill="url(#bp-fade)" />
        </mask>
      </defs>

      {/* the stack: two thinner slabs underneath, then the main slab */}
      <g className="floor">
        <Slab z={-2.9} under delay={0.0} />
        <Slab z={-1.45} under delay={0.2} />
        <Slab z={0} delay={0.4} />
        <g mask="url(#bp-grid-mask)" className="fade-in" style={dl(0.6)}>
          {gridLines.map((g, i) => (
            <path key={i} className="grid-line" d={g} />
          ))}
        </g>
        <g className="fade-in" style={dl(0.9)}>
          {[
            [-PLATE, -PLATE],
            [PLATE, -PLATE],
            [PLATE, PLATE],
            [-PLATE, PLATE],
          ].map(([x, y], i) => (
            <path key={i} className="tick" d={tick(x, y)} />
          ))}
        </g>
      </g>

      {/* traces and a soft glow under them (the moving light is drawn in the separate overlay below) */}
      <g className="routes">
        {routePaths.map((r) => (
          <path key={`u${r.id}`} className="route-under fade-in" d={r.d} style={dl(r.delay)} />
        ))}
        {routePaths.map((r) => (
          <path key={r.id} className="edge edge--route" pathLength={1} d={r.d} style={dl(r.delay - 0.5)} />
        ))}
      </g>

      {BOXES.map((b) => (
        <Module key={b.id} b={b} />
      ))}

      {/* callout */}
      <g className="fade-in annot" style={dl(2.1)}>
        <path className="callout" d={d([[callX, callY], [callX, callTop], [callX + 84, callTop]])} />
        <path className="callout" d={d([[callX - 5, callY], [callX + 5, callY]])} />
        <text className="label label--note" x={callX + 92} y={callTop + 4}>
          Governed orchestration
        </text>
        <text className="label label--sub label--note" x={callX + 92} y={callTop + 20}>
          Human oversight on every action
        </text>
      </g>

      {/* title block */}
      <g className="fade-in titleblock annot" style={dl(2.3)}>
        <rect x={W - 268} y={H - 74} width="248" height="54" />
        <line x1={W - 268} x2={W - 20} y1={H - 47} y2={H - 47} />
        <text className="label label--note" x={W - 256} y={H - 54}>
          FIG. 01 · AGENT ORCHESTRATION
        </text>
        <text className="label label--sub" x={W - 256} y={H - 29}>
          LOTUS CLOUD · REV. 2026
        </text>
      </g>
    </svg>

    {/* The endless motion lives in its own light layer: a line of light out to each agent and a flash on each cube.
        Only these few strokes repaint every frame, never the whole drawing, and the layer can be paused or switched off. */}
    <svg
      className="bp bp--lights"
      viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* the light passes behind the cubes, never over them */}
        <mask id="bp-light-mask" maskUnits="userSpaceOnUse" x={VB.x} y={VB.y} width={VB.w} height={VB.h}>
          <rect x={VB.x} y={VB.y} width={VB.w} height={VB.h} fill="#fff" />
          {BOXES.map((b) => {
            const f = boxFaces(b)
            return <path key={b.id} d={`${f.right} ${f.left} ${f.top}`} fill="#000" />
          })}
        </mask>
      </defs>
      <g mask="url(#bp-light-mask)">
        {routePaths.map((r, i) => (
          <path key={`g${r.id}`} className="route-flow route-flow--glow" pathLength={1} d={r.d} style={dl(ROUTE_START + i * ROUTE_STAGGER)} />
        ))}
        {routePaths.map((r, i) => (
          <path key={`c${r.id}`} className="route-flow" pathLength={1} d={r.d} style={dl(ROUTE_START + i * ROUTE_STAGGER)} />
        ))}
      </g>
      {/* each cube's top edge flashes at the moment the light reaches it */}
      {BOXES.map((b) => {
        const i = ROUTES.findIndex((r) => r.id === b.id)
        return i >= 0 ? <path key={b.id} className="cube-ping" d={boxFaces(b).top} style={dl(ROUTE_START + i * ROUTE_STAGGER)} /> : null
      })}
    </svg>
    </>
  )
})
