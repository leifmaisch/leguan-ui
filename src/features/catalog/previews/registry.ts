import type { ComponentType } from "react"

import type { CatalogComponentSlug } from "@/features/catalog/constants/components"
import { AlertsPreview } from "./alerts-preview"
import { AvatarsPreview } from "./avatars-preview"
import { BackgroundPreview } from "./background-preview"
import { BadgesPreview } from "./badges-preview"
import { BentoGridPreview } from "./bento-grid-preview"
import { BrandingPreview } from "./branding-preview"
import { ButtonsPreview } from "./buttons-preview"
import { CardsPreview } from "./cards-preview"
import { CodePreview } from "./code-preview"
import { CtaPreview } from "./cta-preview"
import { DialogPreview } from "./dialog-preview"
import { DropdownMenuPreview } from "./dropdown-menu-preview"
import { EmptyStatePreview } from "./empty-state-preview"
import { FeaturesPreview } from "./features-preview"
import { FooterPreview } from "./footer-preview"
import { FormControlsPreview } from "./form-controls-preview"
import { GlowCardPreview } from "./glow-card-preview"
import { HeroPreview } from "./hero-preview"
import { InputsPreview } from "./inputs-preview"
import { NavbarPreview } from "./navbar-preview"
import { PopoverPreview } from "./popover-preview"
import { PricingPreview } from "./pricing-preview"
import { ProgressPreview } from "./progress-preview"
import { ScrollAreaPreview } from "./scroll-area-preview"
import { SeparatorPreview } from "./separator-preview"
import { SkeletonPreview } from "./skeleton-preview"
import { StatCardPreview } from "./stat-card-preview"
import { StatusIndicatorPreview } from "./status-indicator-preview"
import { TabsPreview } from "./tabs-preview"
import { TestimonialsPreview } from "./testimonials-preview"
import { TooltipPreview } from "./tooltip-preview"
import { AreaChartPreview } from "@/features/catalog/charts/previews/area-chart"
import { BarChartPreview } from "@/features/catalog/charts/previews/bar-chart"
import { LineChartPreview } from "@/features/catalog/charts/previews/line-chart"
import { PieChartPreview } from "@/features/catalog/charts/previews/pie-chart"
import { RadarChartPreview } from "@/features/catalog/charts/previews/radar-chart"
import { SparklinePreview } from "@/features/catalog/charts/previews/sparkline"

export const componentPreviewRegistry: Record<
  CatalogComponentSlug,
  ComponentType
> = {
  buttons: ButtonsPreview,
  "ascii-background": BackgroundPreview,
  badges: BadgesPreview,
  "dropdown-menu": DropdownMenuPreview,
  inputs: InputsPreview,
  "form-controls": FormControlsPreview,
  cards: CardsPreview,
  code: CodePreview,
  alerts: AlertsPreview,
  tabs: TabsPreview,
  avatars: AvatarsPreview,
  skeleton: SkeletonPreview,
  "scroll-area": ScrollAreaPreview,
  separator: SeparatorPreview,
  dialog: DialogPreview,
  popover: PopoverPreview,
  tooltip: TooltipPreview,
  progress: ProgressPreview,
  "stat-card": StatCardPreview,
  "empty-state": EmptyStatePreview,
  "glow-card": GlowCardPreview,
  "status-indicator": StatusIndicatorPreview,
  "area-chart": AreaChartPreview,
  "bar-chart": BarChartPreview,
  "line-chart": LineChartPreview,
  "pie-chart": PieChartPreview,
  "radar-chart": RadarChartPreview,
  sparkline: SparklinePreview,
  navbar: NavbarPreview,
  hero: HeroPreview,
  features: FeaturesPreview,
  testimonials: TestimonialsPreview,
  pricing: PricingPreview,
  cta: CtaPreview,
  branding: BrandingPreview,
  "bento-grid": BentoGridPreview,
  footer: FooterPreview,
}

export function getComponentPreview(slug: string) {
  return componentPreviewRegistry[slug as CatalogComponentSlug]
}
