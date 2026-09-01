export const asciiPatterns = [
  "radial",
  "wave",
  "diagonal",
  "field",
  "rings",
  "flow",
  "horizon",
  "pulse",
] as const

export type AsciiPattern = (typeof asciiPatterns)[number]

export type AsciiBackgroundConfig = {
  alt: string
  pattern: AsciiPattern
  seed: number
}

/** Demo slugs that pair each pattern with a unique seed, matching reachease blog covers. */
export const demoSlugByPattern: Record<AsciiPattern, string> = {
  radial: "introducing-apiform",
  wave: "the-contact-form-backend-problem",
  diagonal: "why-landing-pages-dont-need-ssr",
  field: "embeds-without-iframes",
  rings: "static-hosting-vs-serverless-forms",
  flow: "reliable-webhook-delivery",
  horizon: "host-landing-page-for-free",
  pulse: "contact-forms-for-static-sites",
}

const slugPatternMap: Record<string, AsciiPattern> = {
  "introducing-apiform": "radial",
  "embeds-without-iframes": "field",
  "reliable-webhook-delivery": "flow",
  "scheduling-without-back-and-forth": "field",
  "contact-forms-for-static-sites": "pulse",
  "host-landing-page-for-free": "horizon",
  "why-landing-pages-dont-need-ssr": "diagonal",
  "static-hosting-vs-serverless-forms": "rings",
  "the-contact-form-backend-problem": "wave",
  "nextjs-static-export-contact-forms": "pulse",
}

const densityChars = [" ", "·", ":", "-", "=", "+", "*", "#"]

export function hashAsciiSeed(value: string) {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function noise(x: number, y: number, seed: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 0.017) * 43758.5453
  return value - Math.floor(value)
}

function patternDensity(
  pattern: AsciiPattern,
  x: number,
  y: number,
  seed: number
): number {
  const nx = x
  const ny = y
  const angle = seed * 0.013

  switch (pattern) {
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

function densityToChar(density: number) {
  const index = Math.min(
    densityChars.length - 1,
    Math.floor(Math.max(0, Math.min(1, density)) * densityChars.length)
  )
  return densityChars[index]
}

export function buildAsciiCells(
  pattern: AsciiPattern,
  seed: number,
  cols: number,
  rows: number
) {
  return Array.from({ length: rows }, (_, row) => {
    const y = row / Math.max(rows - 1, 1)
    return Array.from({ length: cols }, (_, col) => {
      const x = col / Math.max(cols - 1, 1)
      const density = patternDensity(pattern, x, y, seed)
      return {
        char: densityToChar(density),
        density,
      }
    })
  })
}

function resolvePattern(slug: string, pattern?: AsciiPattern): AsciiPattern {
  if (pattern) {
    return pattern
  }

  if (slug in slugPatternMap) {
    return slugPatternMap[slug]
  }

  return asciiPatterns[hashAsciiSeed(slug) % asciiPatterns.length]
}

export type GetAsciiBackgroundOptions = {
  pattern?: AsciiPattern
  seed?: number
}

/** Derive a cover from a slug. Pattern and seed auto-resolve unless overridden. */
export function getAsciiBackground(
  slug: string,
  options?: AsciiPattern | GetAsciiBackgroundOptions
): AsciiBackgroundConfig {
  const resolvedOptions =
    typeof options === "string" ? { pattern: options } : (options ?? {})
  const resolvedPattern = resolvePattern(slug, resolvedOptions.pattern)
  const seed = resolvedOptions.seed ?? hashAsciiSeed(slug)

  return {
    alt: `Abstract ${resolvedPattern} ASCII pattern`,
    pattern: resolvedPattern,
    seed,
  }
}

/** Build a cover directly from a pattern and numeric seed. */
export function createAsciiBackground(
  pattern: AsciiPattern,
  seed: number
): AsciiBackgroundConfig {
  return {
    alt: `Abstract ${pattern} ASCII pattern`,
    pattern,
    seed,
  }
}

/** Catalog helper — returns the config for a named pattern using its demo slug. */
export function getAsciiBackgroundForPattern(
  pattern: AsciiPattern
): AsciiBackgroundConfig {
  return getAsciiBackground(demoSlugByPattern[pattern], pattern)
}
