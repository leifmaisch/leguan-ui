export const PRIMARY_COLOR_STORAGE_KEY = "leguan-primary-color"
export const PRIMARY_COLOR_EVENT = "leguan:primary-color"

export const primaryColorOptions = [
  { id: "neutral", label: "Neutral", swatch: "#525252" },
  { id: "amber", label: "Amber", swatch: "#ffea00" },
  { id: "blue", label: "Blue", swatch: "#3b82f6" },
  { id: "emerald", label: "Emerald", swatch: "#10b981" },
  { id: "violet", label: "Violet", swatch: "#8b5cf6" },
  { id: "rose", label: "Rose", swatch: "#f43f5e" },
] as const

export type PrimaryColorId = (typeof primaryColorOptions)[number]["id"]

export const defaultPrimaryColor: PrimaryColorId = "neutral"

export function isPrimaryColorId(value: string): value is PrimaryColorId {
  return primaryColorOptions.some((option) => option.id === value)
}
