import { createChartComponentMeta } from "@/features/catalog/charts/constants"

export type CatalogComponentGroup =
  | "Actions"
  | "Forms"
  | "Display"
  | "Charts"
  | "Overlay"
  | "Feedback"
  | "Leguan"

export type CatalogComponentKind = "shadcn" | "custom"

export type CatalogComponentAttribution = {
  name: string
  href: string
}

export type CatalogComponentInstall = {
  command: string
  description: string
}

export type CatalogComponentMeta = {
  slug: string
  label: string
  description: string
  group: CatalogComponentGroup
  kind?: CatalogComponentKind
  shadcnName?: string
  files: string[]
  dependencies?: string[]
  attribution?: CatalogComponentAttribution
  install?: CatalogComponentInstall
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
    slug: "dropdown-menu",
    label: "Dropdown Menu",
    description: "Contextual menus for actions and navigation.",
    group: "Actions",
    shadcnName: "dropdown-menu",
    files: ["src/components/ui/dropdown-menu.tsx"],
  },
  {
    slug: "inputs",
    label: "Input",
    description: "Collect user data with text fields and text areas.",
    group: "Forms",
    shadcnName: "input",
    files: [
      "src/components/ui/input.tsx",
      "src/components/ui/label.tsx",
      "src/components/ui/textarea.tsx",
    ],
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
    files: [
      "src/components/ui/card.tsx",
      "src/components/ui/frame.tsx",
      "src/components/ui/field.tsx",
      "src/components/ui/form.tsx",
    ],
    dependencies: ["input", "select", "button", "label"],
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
    description: "Represent users with images, initials, or dotted text.",
    group: "Display",
    shadcnName: "avatar",
    files: ["src/components/ui/avatar.tsx"],
  },
  {
    slug: "skeleton",
    label: "Skeleton",
    description: "Placeholder loading states for content.",
    group: "Display",
    shadcnName: "skeleton",
    files: ["src/components/ui/skeleton.tsx"],
  },
  {
    slug: "separator",
    label: "Separator",
    description: "Visual dividers between sections.",
    group: "Display",
    shadcnName: "separator",
    files: ["src/components/ui/separator.tsx"],
  },
  {
    slug: "dialog",
    label: "Dialog",
    description: "Modal overlays for focused interactions.",
    group: "Overlay",
    shadcnName: "dialog",
    files: ["src/components/ui/dialog.tsx"],
    dependencies: ["button"],
  },
  {
    slug: "popover",
    label: "Popover",
    description: "Floating panels anchored to triggers.",
    group: "Overlay",
    shadcnName: "popover",
    files: ["src/components/ui/popover.tsx"],
  },
  {
    slug: "tooltip",
    label: "Tooltip",
    description: "Brief hints on hover or focus.",
    group: "Overlay",
    shadcnName: "tooltip",
    files: ["src/components/ui/tooltip.tsx"],
  },
  {
    slug: "progress",
    label: "Progress",
    description: "Track completion and loading states.",
    group: "Feedback",
    shadcnName: "progress",
    files: ["src/components/ui/progress.tsx"],
  },
  {
    slug: "stat-card",
    label: "Stat Card",
    description: "Display dashboard metrics with nested panels and deltas.",
    group: "Leguan",
    kind: "custom",
    files: ["src/components/leguan/stat-card.tsx"],
  },
  {
    slug: "empty-state",
    label: "Empty State",
    description: "Guide users when there is no content yet.",
    group: "Leguan",
    kind: "custom",
    files: ["src/components/leguan/empty-state.tsx"],
  },
  {
    slug: "glow-card",
    label: "Glow Card",
    description: "Featured containers with subtle accent borders.",
    group: "Leguan",
    kind: "custom",
    files: ["src/components/leguan/glow-card.tsx"],
  },
  {
    slug: "status-indicator",
    label: "Status Indicator",
    description: "Compact presence and availability signals.",
    group: "Leguan",
    kind: "custom",
    files: ["src/components/leguan/status-indicator.tsx"],
  },
  createChartComponentMeta(
    "area-chart",
    "Area Chart",
    "Dithered area charts with gradient, hatched, and stacked fills."
  ),
  createChartComponentMeta(
    "bar-chart",
    "Bar Chart",
    "Grouped, stacked, and percent bar charts with ordered-dither fills."
  ),
  createChartComponentMeta(
    "line-chart",
    "Line Chart",
    "Line series with glow underlays, solid and dashed stroke variants."
  ),
  createChartComponentMeta(
    "pie-chart",
    "Pie Chart",
    "Pie and donut charts with interactive legend and tooltip."
  ),
  createChartComponentMeta(
    "radar-chart",
    "Radar Chart",
    "Multi-series radar charts for comparing dimensions."
  ),
  createChartComponentMeta(
    "sparkline",
    "Sparkline",
    "Compact decorative trend lines for cards and stat rows."
  ),
]

export const catalogComponentSlugs = catalogComponents.map(
  (component) => component.slug
)

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

export function isCustomComponent(component: CatalogComponentMeta) {
  return component.kind === "custom"
}
