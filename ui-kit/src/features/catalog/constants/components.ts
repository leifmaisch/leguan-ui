export type CatalogComponentGroup = "Actions" | "Forms" | "Display"

export type CatalogComponentMeta = {
  slug: string
  label: string
  description: string
  group: CatalogComponentGroup
  shadcnName: string
  files: string[]
  dependencies?: string[]
}

export const catalogComponents: CatalogComponentMeta[] = [
  {
    slug: "buttons",
    label: "Button",
    description: "Trigger actions with multiple variants and sizes.",
    group: "Actions",
    shadcnName: "button",
    files: ["src/components/ui/button.tsx"],
  },
  {
    slug: "badges",
    label: "Badge",
    description: "Highlight status, labels, and metadata.",
    group: "Actions",
    shadcnName: "badge",
    files: ["src/components/ui/badge.tsx"],
  },
  {
    slug: "inputs",
    label: "Input",
    description: "Collect user data with text fields and text areas.",
    group: "Forms",
    shadcnName: "input",
    files: ["src/components/ui/input.tsx", "src/components/ui/label.tsx", "src/components/ui/textarea.tsx"],
    dependencies: ["label", "textarea"],
  },
  {
    slug: "form-controls",
    label: "Form Controls",
    description: "Switches, checkboxes, and select inputs for forms.",
    group: "Forms",
    shadcnName: "switch",
    files: [
      "src/components/ui/switch.tsx",
      "src/components/ui/checkbox.tsx",
      "src/components/ui/select.tsx",
      "src/components/ui/label.tsx",
    ],
    dependencies: ["checkbox", "select", "label"],
  },
  {
    slug: "cards",
    label: "Card",
    description: "Group related content in structured containers.",
    group: "Display",
    shadcnName: "card",
    files: ["src/components/ui/card.tsx"],
  },
  {
    slug: "alerts",
    label: "Alert",
    description: "Display important messages and feedback.",
    group: "Display",
    shadcnName: "alert",
    files: ["src/components/ui/alert.tsx"],
  },
  {
    slug: "tabs",
    label: "Tabs",
    description: "Organize content into switchable panels.",
    group: "Display",
    shadcnName: "tabs",
    files: ["src/components/ui/tabs.tsx"],
  },
  {
    slug: "avatars",
    label: "Avatar",
    description: "Represent users with images or initials.",
    group: "Display",
    shadcnName: "avatar",
    files: ["src/components/ui/avatar.tsx"],
  },
]

export const catalogComponentSlugs = catalogComponents.map((component) => component.slug)

export type CatalogComponentSlug = (typeof catalogComponentSlugs)[number]

export function getCatalogComponent(slug: string) {
  return catalogComponents.find((component) => component.slug === slug)
}

export function getCatalogNavGroups() {
  const groups = new Map<CatalogComponentGroup, CatalogComponentMeta[]>()

  for (const component of catalogComponents) {
    const items = groups.get(component.group) ?? []
    items.push(component)
    groups.set(component.group, items)
  }

  return Array.from(groups.entries()).map(([title, items]) => ({
    title,
    items,
  }))
}
