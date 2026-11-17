/*
  Tiny isometric projection helpers.
  World axes: x runs down-right, y runs down-left, z runs up.
  Visible faces of a box are therefore: top (z = h), "left" (y = y1) and "right" (x = x1).
*/
export type Pt = [number, number]

export interface Origin {
  cx: number
  cy: number
  k: number
}

export const COS30 = Math.cos(Math.PI / 6)
export const SIN30 = 0.5

export const proj = (x: number, y: number, z = 0, o: Origin = { cx: 0, cy: 0, k: 1 }): Pt => [
  o.cx + (x - y) * COS30 * o.k,
  o.cy + (x + y) * SIN30 * o.k - z * o.k,
]

const n = (v: number) => Number(v.toFixed(2))

/** Build an SVG path `d` string from screen points. */
export const d = (points: Pt[], close = false): string =>
  points.map(([x, y], i) => `${i ? 'L' : 'M'}${n(x)} ${n(y)}`).join('') + (close ? 'Z' : '')

/** Text on the left face (y = y1), reading left to right. Origin = top-left of the face. */
export const leftFaceMatrix = (e: number, f: number) => `matrix(${COS30} ${SIN30} 0 1 ${n(e)} ${n(f)})`
/** Text on the right face (x = x1), reading toward -y. Origin = top-left of the face. */
export const rightFaceMatrix = (e: number, f: number) => `matrix(${COS30} ${-SIN30} 0 1 ${n(e)} ${n(f)})`
/**
 * Text lying flat on a top face (printed on the plate). 1 local unit = 1 screen px along
 * each world axis; text runs along +x, glyph-up points toward -y.
 */
export const topFaceMatrix = (e: number, f: number) =>
  `matrix(${COS30} ${SIN30} ${-COS30} ${SIN30} ${n(e)} ${n(f)})`
