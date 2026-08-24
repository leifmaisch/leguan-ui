export type Rgb = [number, number, number]

export type DitherColor =
  | "primary"
  | "negative"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "orange"
  | "red"
  | "grey"

export type Seed = { fill: Rgb; line: Rgb; star: Rgb }

// Each seed: the area-fill hue, the bright series line, and the star sparkle.
export const PALETTE: Record<Exclude<DitherColor, "primary" | "negative">, Seed> = {
  green: { fill: [40, 210, 110], line: [150, 255, 180], star: [200, 255, 220] },
  blue: { fill: [53, 143, 243], line: [150, 200, 255], star: [205, 228, 255] },
  purple: {
    fill: [150, 110, 255],
    line: [200, 175, 255],
    star: [225, 210, 255],
  },
  pink: { fill: [240, 90, 190], line: [255, 170, 220], star: [255, 205, 235] },
  orange: {
    fill: [255, 150, 50],
    line: [255, 195, 130],
    star: [255, 220, 175],
  },
  red: { fill: [240, 70, 70], line: [255, 150, 140], star: [255, 195, 185] },
  // No-data: a muted grey so empty metrics read as "nothing here".
  grey: { fill: [92, 92, 100], line: [140, 140, 150], star: [165, 165, 175] },
}

export const rgb = ([r, g, b]: Rgb, k = 1, a = 1) =>
  `rgba(${Math.round(r * k)},${Math.round(g * k)},${Math.round(b * k)},${a})`

function lightenChannel(channel: number, amount: number) {
  return Math.round(channel + (255 - channel) * amount)
}

export function seedFromRgb(fill: Rgb): Seed {
  return {
    fill,
    line: [
      lightenChannel(fill[0], 0.45),
      lightenChannel(fill[1], 0.45),
      lightenChannel(fill[2], 0.45),
    ],
    star: [
      lightenChannel(fill[0], 0.65),
      lightenChannel(fill[1], 0.65),
      lightenChannel(fill[2], 0.65),
    ],
  }
}

function parseCssColor(value: string): Rgb | null {
  const trimmed = value.trim()
  if (!trimmed) return null

  if (trimmed.startsWith("#")) {
    const hex = trimmed.slice(1)
    if (hex.length === 3) {
      return [
        Number.parseInt(hex[0]! + hex[0], 16),
        Number.parseInt(hex[1]! + hex[1], 16),
        Number.parseInt(hex[2]! + hex[2], 16),
      ]
    }
    if (hex.length === 6) {
      return [
        Number.parseInt(hex.slice(0, 2), 16),
        Number.parseInt(hex.slice(2, 4), 16),
        Number.parseInt(hex.slice(4, 6), 16),
      ]
    }
  }

  const rgbMatch = trimmed.match(/^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)/)
  if (rgbMatch) {
    return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])]
  }

  return null
}

function readCssVarRgb(name: string): Rgb | null {
  if (typeof window === "undefined") return null
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
  return parseCssColor(raw)
}

const FALLBACK_PRIMARY: Rgb = [38, 38, 38]
const FALLBACK_NEGATIVE: Rgb = [115, 115, 115]

function readThemePrimaryRgb(): Rgb {
  return readCssVarRgb("--primary") ?? FALLBACK_PRIMARY
}

function readThemeNegativeRgb(): Rgb {
  return readCssVarRgb("--chart-negative") ?? FALLBACK_NEGATIVE
}

export const seedOfColor = (color: DitherColor): Seed => {
  if (color === "primary") {
    return seedFromRgb(readThemePrimaryRgb())
  }
  if (color === "negative") {
    return seedFromRgb(readThemeNegativeRgb())
  }
  return PALETTE[color]
}

export const isDitherColor = (value: unknown): value is DitherColor =>
  typeof value === "string" &&
  (value === "primary" || value === "negative" || value in PALETTE)
