"use client"

import type { Icon } from "@phosphor-icons/react"
import {
  AppWindow,
  ChartBar,
  ChartLine,
  ChartLineUp,
  ChartPie,
  ChartPolar,
  Circle,
  Cloud,
  CreditCard,
  CursorClick,
  DotsThreeOutline,
  Gauge,
  Info,
  Lightning,
  Minus,
  Seal,
  Sparkle,
  SpinnerGap,
  Tabs,
  Textbox,
  ToggleLeft,
  TrendUp,
  User,
  WarningCircle,
} from "@phosphor-icons/react"
import type { CatalogComponentSlug } from "@/features/catalog/constants/components"

export const catalogNavIcons: Record<CatalogComponentSlug, Icon> = {
  buttons: CursorClick,
  badges: Seal,
  "dropdown-menu": DotsThreeOutline,
  inputs: Textbox,
  "form-controls": ToggleLeft,
  cards: CreditCard,
  alerts: WarningCircle,
  tabs: Tabs,
  avatars: User,
  skeleton: SpinnerGap,
  separator: Minus,
  dialog: AppWindow,
  popover: Cloud,
  tooltip: Info,
  progress: Gauge,
  "stat-card": ChartLineUp,
  "empty-state": Circle,
  "glow-card": Sparkle,
  "status-indicator": Lightning,
  "area-chart": ChartLineUp,
  "bar-chart": ChartBar,
  "line-chart": ChartLine,
  "pie-chart": ChartPie,
  "radar-chart": ChartPolar,
  sparkline: TrendUp,
}

export function getCatalogNavIcon(slug: string) {
  return catalogNavIcons[slug as CatalogComponentSlug]
}
