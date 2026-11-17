/* Shared geometry for the dot artwork (kept apart from the components so fast refresh stays happy). */
export const WORLD = { cols: 90, rows: 35, step: 9, lat0: 82 } // 4° per dot, lat 82 → -58

export function lonLatToPct(lon: number, lat: number): { x: number; y: number } {
  return { x: ((lon + 180) / 360) * 100, y: ((WORLD.lat0 - lat) / (WORLD.rows * 4)) * 100 }
}

export const TREND_STAGES = [
  { x: 200, y: 172 },
  { x: 600, y: 112 },
  { x: 1000, y: 52 },
]
