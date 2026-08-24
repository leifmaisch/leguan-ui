export const catalogSections = [
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "inputs", label: "Inputs" },
  { id: "cards", label: "Cards" },
  { id: "alerts", label: "Alerts" },
  { id: "tabs", label: "Tabs" },
  { id: "avatars", label: "Avatars" },
  { id: "form-controls", label: "Form Controls" },
] as const

export type CatalogSectionId = (typeof catalogSections)[number]["id"]
