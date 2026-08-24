"use client"

import type { Icon } from "@phosphor-icons/react"
import {
  AppWindowIcon,
  ChartBarIcon,
  ChartLineIcon,
  ChartLineUpIcon,
  ChartPieIcon,
  ChartPolarIcon,
  CircleIcon,
  CloudIcon,
  CodeIcon,
  CreditCardIcon,
  CursorClickIcon,
  DotsThreeOutlineIcon,
  GaugeIcon,
  InfoIcon,
  LightningIcon,
  MinusIcon,
  SealIcon,
  SparkleIcon,
  SpinnerGapIcon,
  TabsIcon,
  TextboxIcon,
  ToggleLeftIcon,
  TrendUpIcon,
  UserIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react"
import type { CatalogComponentSlug } from "@/features/catalog/constants/components"

export const catalogNavIcons: Record<CatalogComponentSlug, Icon> = {
  buttons: CursorClickIcon,
  badges: SealIcon,
  "dropdown-menu": DotsThreeOutlineIcon,
  inputs: TextboxIcon,
  "form-controls": ToggleLeftIcon,
  cards: CreditCardIcon,
  alerts: WarningCircleIcon,
  tabs: TabsIcon,
  avatars: UserIcon,
  skeleton: SpinnerGapIcon,
  separator: MinusIcon,
  code: CodeIcon,
  dialog: AppWindowIcon,
  popover: CloudIcon,
  tooltip: InfoIcon,
  progress: GaugeIcon,
  "stat-card": ChartLineUpIcon,
  "empty-state": CircleIcon,
  "glow-card": SparkleIcon,
  "status-indicator": LightningIcon,
  "area-chart": ChartLineUpIcon,
  "bar-chart": ChartBarIcon,
  "line-chart": ChartLineIcon,
  "pie-chart": ChartPieIcon,
  "radar-chart": ChartPolarIcon,
  sparkline: TrendUpIcon,
}

export function getCatalogNavIcon(slug: string) {
  return catalogNavIcons[slug as CatalogComponentSlug]
}
