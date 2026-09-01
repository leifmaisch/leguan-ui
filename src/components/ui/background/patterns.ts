export const asciiShapes = [
  "radial",
  "wave",
  "diagonal",
  "field",
  "rings",
  "flow",
  "horizon",
  "pulse",
] as const

export type AsciiShape = (typeof asciiShapes)[number]

export type AsciiCell = {
  char: string
  opacity: number
}

const demoSlugByShape: Record<AsciiShape, string> = {
  radial: "introducing-apiform",
  wave: "the-contact-form-backend-problem",
  diagonal: "why-landing-pages-dont-need-ssr",
  field: "embeds-without-iframes",
  rings: "static-hosting-vs-serverless-forms",
  flow: "reliable-webhook-delivery",
  horizon: "host-landing-page-for-free",
  pulse: "contact-forms-for-static-sites",
}

const densityChars = [" ", "·", ":", "-", "=", "+", "*", "#"]

export function hashAsciiSeed(value: string) {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

/** Demo seeds for catalog previews. */
export const demoSeedByShape = Object.fromEntries(
  asciiShapes.map((shape) => [shape, hashAsciiSeed(demoSlugByShape[shape])])
) as Record<AsciiShape, number>

function noise(x: number, y: number, seed: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 0.017) * 43758.5453
  return value - Math.floor(value)
}

function shapeDensity(
  shape: AsciiShape,
  x: number,
  y: number,
  seed: number
): number {
  const nx = x
  const ny = y
  const angle = seed * 0.013

  switch (shape) {
    case "radial": {
      const dx = nx - 0.5
      const dy = ny - 0.42
      return 1 - Math.min(1, Math.hypot(dx, dy) * 1.35)
    }
    case "wave":
      return (
        (Math.sin(nx * 10 + seed * 0.01) +
          Math.sin(ny * 8 + nx * 4 + seed * 0.008) +
          2) /
        4
      )
    case "diagonal":
      return (nx * 0.65 + ny * 0.35 + Math.sin(seed * 0.002) * 0.08) % 1
    case "field":
      return (
        (Math.sin(nx * 7 + seed * 0.005) +
          Math.cos(ny * 9 - seed * 0.004) +
          noise(nx, ny, seed) * 0.35 +
          2) /
        4
      )
    case "rings": {
      const dx = nx - 0.5
      const dy = ny - 0.5
      const dist = Math.hypot(dx, dy)
      return (Math.sin(dist * 22 - seed * 0.003) + 1) / 2
    }
    case "flow":
      return (
        (Math.sin(nx * 6 + Math.sin(ny * 5 + seed * 0.006) * 2) +
          Math.cos(ny * 4 - nx * 3 + seed * 0.005) +
          2) /
        4
      )
    case "horizon": {
      const band = 0.55 + Math.sin(nx * 5 + seed * 0.004) * 0.08
      const edge = 1 - Math.min(1, Math.abs(ny - band) * 8)
      const sky = 1 - ny * 0.85
      return Math.max(edge * 0.9, sky * 0.45)
    }
    case "pulse":
      return (
        (Math.sin((nx - 0.5) * 14 + angle) *
          Math.cos((ny - 0.5) * 12 + angle * 1.3) +
          1) /
        2
      )
    default:
      return (nx + ny) / 2
  }
}

function round6(value: number) {
  return Math.round(value * 1_000_000) / 1_000_000
}

function densityToChar(density: number) {
  const index = Math.min(
    densityChars.length - 1,
    Math.floor(Math.max(0, Math.min(1, density)) * densityChars.length)
  )
  return densityChars[index]
}

export function buildAsciiCells(
  shape: AsciiShape,
  seed: number,
  cols: number,
  rows: number
): AsciiCell[][] {
  return Array.from({ length: rows }, (_, row) => {
    const y = row / Math.max(rows - 1, 1)
    return Array.from({ length: cols }, (_, col) => {
      const x = col / Math.max(cols - 1, 1)
      const density = round6(shapeDensity(shape, x, y, seed))
      return {
        char: densityToChar(density),
        opacity: round6(0.12 + density * 0.55),
      }
    })
  })
}
