import { createChartComponentMeta } from "@/features/catalog/charts/constants"

export type CatalogComponentGroup =
  | "Actions"
  | "Forms"
  | "Display"
  | "Charts"
  | "Overlay"
  | "Feedback"
  | "Website sections"

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
  previewFramed?: boolean
  codeExamples?: boolean
  registryOnly?: boolean
}

export const catalogComponents: CatalogComponentMeta[] = [
  {
    slug: "foundation",
    label: "Foundation",
    description:
      "Shared utilities, squircle helpers, surface depth, dot patterns, and theme tokens.",
    group: "Display",
    kind: "custom",
    registryOnly: true,
    files: [
      "src/lib/utils.ts",
      "src/lib/squircle.ts",
      "src/lib/surface-depth.ts",
      "src/lib/dot-pattern.ts",
    ],
  },
  {
    slug: "fonts",
    label: "Fonts",
    description:
      "Inter body text, Rubik headings, and Geist Mono for code and charts.",
    group: "Display",
    kind: "custom",
    registryOnly: true,
    files: ["src/lib/fonts.ts"],
  },
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
    previewFramed: false,
    codeExamples: true,
  },
  {
    slug: "glow-card",
    label: "Glow Card",
    description: "Featured containers with subtle accent borders.",
    group: "Display",
    kind: "custom",
    files: ["src/components/ui/glow-card.tsx"],
    previewFramed: false,
  },
  {
    slug: "stat-card",
    label: "Stat Card",
    description: "Display dashboard metrics with nested panels and deltas.",
    group: "Display",
    kind: "custom",
    files: ["src/components/ui/stat-card.tsx"],
    previewFramed: false,
  },
  {
    slug: "empty-state",
    label: "Empty State",
    description: "Guide users when there is no content yet.",
    group: "Display",
    kind: "custom",
    files: ["src/components/ui/empty-state.tsx"],
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
    slug: "code",
    label: "Code",
    description: "Syntax-highlighted blocks with copy, scroll, and file headers.",
    group: "Display",
    kind: "custom",
    files: [
      "src/components/ui/code.tsx",
      "src/components/ui/scroll-area.tsx",
    ],
    dependencies: ["button"],
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
    slug: "status-indicator",
    label: "Status Indicator",
    description: "Compact presence and availability signals.",
    group: "Feedback",
    kind: "custom",
    files: ["src/components/ui/status-indicator.tsx"],
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
  {
    slug: "navbar",
    label: "Navbar",
    description: "Responsive site header with links, actions, and mobile menu.",
    group: "Website sections",
    kind: "custom",
    files: ["src/components/ui/navbar.tsx"],
    dependencies: ["button"],
    previewFramed: false,
  },
  {
    slug: "hero",
    label: "Hero",
    description:
      "Framed hero with centered intro, chips, actions, and a showcase panel.",
    group: "Website sections",
    kind: "custom",
    files: ["src/components/ui/section.tsx", "src/components/ui/hero.tsx"],
    dependencies: ["button"],
    previewFramed: false,
  },
  {
    slug: "features",
    label: "Features",
    description: "Bento grid sections for product highlights and landing pages.",
    group: "Website sections",
    kind: "custom",
    files: [
      "src/components/ui/section.tsx",
      "src/components/ui/features.tsx",
    ],
    previewFramed: false,
  },
  {
    slug: "testimonials",
    label: "Testimonials",
    description: "Customer quote cards in a grid section for social proof.",
    group: "Website sections",
    kind: "custom",
    files: [
      "src/components/ui/section.tsx",
      "src/components/ui/testimonials.tsx",
    ],
    dependencies: ["avatar"],
    previewFramed: false,
  },
  {
    slug: "pricing",
    label: "Pricing",
    description: "Three-column pricing cards with features and plan actions.",
    group: "Website sections",
    kind: "custom",
    files: [
      "src/components/ui/section.tsx",
      "src/components/ui/pricing.tsx",
    ],
    dependencies: ["button"],
    previewFramed: false,
  },
  {
    slug: "cta",
    label: "CTA",
    description: "Centered call-to-action blocks with eyebrow, copy, and actions.",
    group: "Website sections",
    kind: "custom",
    files: ["src/components/ui/section.tsx", "src/components/ui/cta.tsx"],
    dependencies: ["button"],
    previewFramed: false,
  },
  {
    slug: "footer",
    label: "Footer",
    description:
      "Contained footer panel with brand, link columns, and a legal bar.",
    group: "Website sections",
    kind: "custom",
    files: ["src/components/ui/footer.tsx"],
    previewFramed: false,
  },
]

export const catalogRegistrySlugs = catalogComponents.map(
  (component) => component.slug
)

export const catalogDocSlugs = catalogComponents
  .filter((component) => !component.registryOnly)
  .map((component) => component.slug)

export type CatalogComponentSlug = (typeof catalogDocSlugs)[number]

export function isRegistryOnlyComponent(component: CatalogComponentMeta) {
  return component.registryOnly === true
}

export function getCatalogComponent(slug: string) {
  return catalogComponents.find((component) => component.slug === slug)
}

export function getCatalogNavGroups() {
  const groups = new Map<CatalogComponentGroup, CatalogComponentMeta[]>()

  for (const component of catalogComponents) {
    if (component.registryOnly) {
      continue
    }

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
