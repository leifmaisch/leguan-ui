import type { ComponentType } from "react"

import type { CatalogComponentSlug } from "@/features/catalog/constants/components"
import { AlertsPreview } from "./alerts-preview"
import { AvatarsPreview } from "./avatars-preview"
import { BadgesPreview } from "./badges-preview"
import { ButtonsPreview } from "./buttons-preview"
import { CardsPreview } from "./cards-preview"
import { FormControlsPreview } from "./form-controls-preview"
import { InputsPreview } from "./inputs-preview"
import { TabsPreview } from "./tabs-preview"

export const componentPreviewRegistry: Record<CatalogComponentSlug, ComponentType> = {
  buttons: ButtonsPreview,
  badges: BadgesPreview,
  inputs: InputsPreview,
  "form-controls": FormControlsPreview,
  cards: CardsPreview,
  alerts: AlertsPreview,
  tabs: TabsPreview,
  avatars: AvatarsPreview,
}

export function getComponentPreview(slug: string) {
  return componentPreviewRegistry[slug as CatalogComponentSlug]
}
