"use client"

import type { Icon } from "@phosphor-icons/react"
import {
  CreditCard,
  CursorClick,
  Seal,
  Tabs,
  Textbox,
  ToggleLeft,
  User,
  WarningCircle,
} from "@phosphor-icons/react"
import type { CatalogComponentSlug } from "@/features/catalog/constants/components"

export const catalogNavIcons: Record<CatalogComponentSlug, Icon> = {
  buttons: CursorClick,
  badges: Seal,
  inputs: Textbox,
  "form-controls": ToggleLeft,
  cards: CreditCard,
  alerts: WarningCircle,
  tabs: Tabs,
  avatars: User,
}

export function getCatalogNavIcon(slug: string) {
  return catalogNavIcons[slug as CatalogComponentSlug]
}
