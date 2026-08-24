import type { ChartConfig } from "@/components/dither-kit"

export const monthlyData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 240, mobile: 100 },
  { month: "Mar", desktop: 198, mobile: 120 },
  { month: "Apr", desktop: 278, mobile: 140 },
  { month: "May", desktop: 309, mobile: 160 },
  { month: "Jun", desktop: 284, mobile: 175 },
]

export const monthlyConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "primary" },
  mobile: { label: "Mobile", color: "negative" },
}

export const browserData = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 120 },
  { browser: "edge", visitors: 90 },
]

export const browserConfig: ChartConfig = {
  chrome: { label: "Chrome", color: "primary" },
  safari: { label: "Safari", color: "negative" },
  firefox: { label: "Firefox", color: "primary" },
  edge: { label: "Edge", color: "negative" },
}

export const skillData = [
  { skill: "Speed", desktop: 186, mobile: 120 },
  { skill: "Power", desktop: 205, mobile: 98 },
  { skill: "Range", desktop: 160, mobile: 140 },
  { skill: "Defense", desktop: 140, mobile: 175 },
  { skill: "Agility", desktop: 190, mobile: 155 },
]

export const sparklineData = [3, 7, 5, 9, 8, 12, 10, 14, 11, 16]
