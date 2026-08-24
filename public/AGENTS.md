# Leguan UI

Component catalog for agents and tooling.

## Overview

- Docs UI: `/agents`
- Download: `/AGENTS.md`
- Registry URL template: `https://leguan-ui.pages.dev/r/{name}.json`
- Registry namespace: `@leguan`
- Package name: `leguan-ui`

## Registry setup

```bash
pnpm dlx shadcn@latest registry add @leguan=https://leguan-ui.pages.dev/r/{name}.json
```

Install foundation first using the direct registry URL:

```bash
pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/foundation.json
```

For other components, prefer direct URL installs. The `@leguan/*` shorthand can fail when resolving foundation dependencies unless the registry is configured:

## Components

### Actions

#### Button

- Slug: `buttons`
- Docs: `/components/buttons`
- Description: Trigger actions with multiple variants and sizes.
- Registry item: `https://leguan-ui.pages.dev/r/buttons.json`
- Files:
  - `src/components/ui/button.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/buttons`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/buttons.json`

#### Badge

- Slug: `badges`
- Docs: `/components/badges`
- Description: Highlight status, labels, and metadata.
- Registry item: `https://leguan-ui.pages.dev/r/badges.json`
- Files:
  - `src/components/ui/badge.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/badges`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/badges.json`

#### Dropdown Menu

- Slug: `dropdown-menu`
- Docs: `/components/dropdown-menu`
- Description: Contextual menus for actions and navigation.
- Registry item: `https://leguan-ui.pages.dev/r/dropdown-menu.json`
- Files:
  - `src/components/ui/dropdown-menu.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/dropdown-menu`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/dropdown-menu.json`

### Forms

#### Input

- Slug: `inputs`
- Docs: `/components/inputs`
- Description: Collect user data with text fields and text areas.
- Registry item: `https://leguan-ui.pages.dev/r/inputs.json`
- Files:
  - `src/components/ui/input.tsx`
  - `src/components/ui/label.tsx`
  - `src/components/ui/textarea.tsx`
- Bundled dependencies: `label`, `textarea`
- Install: `pnpm dlx shadcn@latest add @leguan/inputs`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/inputs.json`

#### Form Controls

- Slug: `form-controls`
- Docs: `/components/form-controls`
- Description: Switches, checkboxes, and select inputs for forms.
- Registry item: `https://leguan-ui.pages.dev/r/form-controls.json`
- Files:
  - `src/components/ui/switch.tsx`
  - `src/components/ui/checkbox.tsx`
  - `src/components/ui/select.tsx`
  - `src/components/ui/label.tsx`
- Bundled dependencies: `checkbox`, `select`, `label`
- Install: `pnpm dlx shadcn@latest add @leguan/form-controls`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/form-controls.json`

### Display

#### Card

- Slug: `cards`
- Docs: `/components/cards`
- Description: Group related content in structured containers.
- Registry item: `https://leguan-ui.pages.dev/r/cards.json`
- Files:
  - `src/components/ui/card.tsx`
  - `src/components/ui/frame.tsx`
  - `src/components/ui/field.tsx`
  - `src/components/ui/form.tsx`
- Bundled dependencies: `input`, `select`, `button`, `label`
- Install: `pnpm dlx shadcn@latest add @leguan/cards`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/cards.json`

#### Glow Card

- Slug: `glow-card`
- Docs: `/components/glow-card`
- Description: Featured containers with subtle accent borders.
- Registry item: `https://leguan-ui.pages.dev/r/glow-card.json`
- Files:
  - `src/components/ui/glow-card.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/glow-card`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/glow-card.json`

#### Stat Card

- Slug: `stat-card`
- Docs: `/components/stat-card`
- Description: Display dashboard metrics with nested panels and deltas.
- Registry item: `https://leguan-ui.pages.dev/r/stat-card.json`
- Files:
  - `src/components/ui/stat-card.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/stat-card`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/stat-card.json`

#### Empty State

- Slug: `empty-state`
- Docs: `/components/empty-state`
- Description: Guide users when there is no content yet.
- Registry item: `https://leguan-ui.pages.dev/r/empty-state.json`
- Files:
  - `src/components/ui/empty-state.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/empty-state`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/empty-state.json`

#### Alert

- Slug: `alerts`
- Docs: `/components/alerts`
- Description: Display important messages and feedback.
- Registry item: `https://leguan-ui.pages.dev/r/alerts.json`
- Files:
  - `src/components/ui/alert.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/alerts`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/alerts.json`

#### Tabs

- Slug: `tabs`
- Docs: `/components/tabs`
- Description: Organize content into switchable panels.
- Registry item: `https://leguan-ui.pages.dev/r/tabs.json`
- Files:
  - `src/components/ui/tabs.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/tabs`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/tabs.json`

#### Avatar

- Slug: `avatars`
- Docs: `/components/avatars`
- Description: Represent users with images, initials, or dotted text.
- Registry item: `https://leguan-ui.pages.dev/r/avatars.json`
- Files:
  - `src/components/ui/avatar.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/avatars`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/avatars.json`

#### Skeleton

- Slug: `skeleton`
- Docs: `/components/skeleton`
- Description: Placeholder loading states for content.
- Registry item: `https://leguan-ui.pages.dev/r/skeleton.json`
- Files:
  - `src/components/ui/skeleton.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/skeleton`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/skeleton.json`

#### Separator

- Slug: `separator`
- Docs: `/components/separator`
- Description: Visual dividers between sections.
- Registry item: `https://leguan-ui.pages.dev/r/separator.json`
- Files:
  - `src/components/ui/separator.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/separator`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/separator.json`

#### Code

- Slug: `code`
- Docs: `/components/code`
- Description: Syntax-highlighted blocks with copy, scroll, and file headers.
- Registry item: `https://leguan-ui.pages.dev/r/code.json`
- Files:
  - `src/components/ui/code.tsx`
  - `src/components/ui/scroll-area.tsx`
- Bundled dependencies: `button`
- Install: `pnpm dlx shadcn@latest add @leguan/code`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/code.json`

### Overlay

#### Dialog

- Slug: `dialog`
- Docs: `/components/dialog`
- Description: Modal overlays for focused interactions.
- Registry item: `https://leguan-ui.pages.dev/r/dialog.json`
- Files:
  - `src/components/ui/dialog.tsx`
- Bundled dependencies: `button`
- Install: `pnpm dlx shadcn@latest add @leguan/dialog`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/dialog.json`

#### Popover

- Slug: `popover`
- Docs: `/components/popover`
- Description: Floating panels anchored to triggers.
- Registry item: `https://leguan-ui.pages.dev/r/popover.json`
- Files:
  - `src/components/ui/popover.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/popover`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/popover.json`

#### Tooltip

- Slug: `tooltip`
- Docs: `/components/tooltip`
- Description: Brief hints on hover or focus.
- Registry item: `https://leguan-ui.pages.dev/r/tooltip.json`
- Files:
  - `src/components/ui/tooltip.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/tooltip`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/tooltip.json`

### Feedback

#### Progress

- Slug: `progress`
- Docs: `/components/progress`
- Description: Track completion and loading states.
- Registry item: `https://leguan-ui.pages.dev/r/progress.json`
- Files:
  - `src/components/ui/progress.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/progress`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/progress.json`

#### Status Indicator

- Slug: `status-indicator`
- Docs: `/components/status-indicator`
- Description: Compact presence and availability signals.
- Registry item: `https://leguan-ui.pages.dev/r/status-indicator.json`
- Files:
  - `src/components/ui/status-indicator.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/status-indicator`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/status-indicator.json`

### Charts

#### Area Chart

- Slug: `area-chart`
- Docs: `/components/area-chart`
- Description: Dithered area charts with gradient, hatched, and stacked fills.
- Registry item: `https://leguan-ui.pages.dev/r/area-chart.json`
- Files:
  - `src/components/dither-kit/block-legend.tsx`
  - `src/components/dither-kit/cartesian-root.tsx`
  - `src/components/dither-kit/chart-context.tsx`
  - `src/components/dither-kit/common-context.tsx`
  - `src/components/dither-kit/dither-paint.ts`
  - `src/components/dither-kit/dot.tsx`
  - `src/components/dither-kit/grid.tsx`
  - `src/components/dither-kit/legend.tsx`
  - `src/components/dither-kit/lib.ts`
  - `src/components/dither-kit/palette.ts`
  - `src/components/dither-kit/polar-context.tsx`
  - `src/components/dither-kit/polar-root.tsx`
  - `src/components/dither-kit/polar.ts`
  - `src/components/dither-kit/reference-line.tsx`
  - `src/components/dither-kit/scales.ts`
  - `src/components/dither-kit/series-context.tsx`
  - `src/components/dither-kit/tooltip.tsx`
  - `src/components/dither-kit/use-chart-dimensions.ts`
  - `src/components/dither-kit/x-axis.tsx`
  - `src/components/dither-kit/y-axis.tsx`
  - `src/components/dither-kit/area-chart.tsx`
  - `src/components/dither-kit/area.tsx`
  - `src/components/dither-kit/cartesian-canvas.tsx`
  - `src/components/dither-kit/sparkline.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/area-chart`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/area-chart.json`

#### Bar Chart

- Slug: `bar-chart`
- Docs: `/components/bar-chart`
- Description: Grouped, stacked, and percent bar charts with ordered-dither fills.
- Registry item: `https://leguan-ui.pages.dev/r/bar-chart.json`
- Files:
  - `src/components/dither-kit/block-legend.tsx`
  - `src/components/dither-kit/cartesian-root.tsx`
  - `src/components/dither-kit/chart-context.tsx`
  - `src/components/dither-kit/common-context.tsx`
  - `src/components/dither-kit/dither-paint.ts`
  - `src/components/dither-kit/dot.tsx`
  - `src/components/dither-kit/grid.tsx`
  - `src/components/dither-kit/legend.tsx`
  - `src/components/dither-kit/lib.ts`
  - `src/components/dither-kit/palette.ts`
  - `src/components/dither-kit/polar-context.tsx`
  - `src/components/dither-kit/polar-root.tsx`
  - `src/components/dither-kit/polar.ts`
  - `src/components/dither-kit/reference-line.tsx`
  - `src/components/dither-kit/scales.ts`
  - `src/components/dither-kit/series-context.tsx`
  - `src/components/dither-kit/tooltip.tsx`
  - `src/components/dither-kit/use-chart-dimensions.ts`
  - `src/components/dither-kit/x-axis.tsx`
  - `src/components/dither-kit/y-axis.tsx`
  - `src/components/dither-kit/bar-chart.tsx`
  - `src/components/dither-kit/bar.tsx`
  - `src/components/dither-kit/bar-canvas.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/bar-chart`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/bar-chart.json`

#### Line Chart

- Slug: `line-chart`
- Docs: `/components/line-chart`
- Description: Line series with glow underlays, solid and dashed stroke variants.
- Registry item: `https://leguan-ui.pages.dev/r/line-chart.json`
- Files:
  - `src/components/dither-kit/block-legend.tsx`
  - `src/components/dither-kit/cartesian-root.tsx`
  - `src/components/dither-kit/chart-context.tsx`
  - `src/components/dither-kit/common-context.tsx`
  - `src/components/dither-kit/dither-paint.ts`
  - `src/components/dither-kit/dot.tsx`
  - `src/components/dither-kit/grid.tsx`
  - `src/components/dither-kit/legend.tsx`
  - `src/components/dither-kit/lib.ts`
  - `src/components/dither-kit/palette.ts`
  - `src/components/dither-kit/polar-context.tsx`
  - `src/components/dither-kit/polar-root.tsx`
  - `src/components/dither-kit/polar.ts`
  - `src/components/dither-kit/reference-line.tsx`
  - `src/components/dither-kit/scales.ts`
  - `src/components/dither-kit/series-context.tsx`
  - `src/components/dither-kit/tooltip.tsx`
  - `src/components/dither-kit/use-chart-dimensions.ts`
  - `src/components/dither-kit/x-axis.tsx`
  - `src/components/dither-kit/y-axis.tsx`
  - `src/components/dither-kit/area-chart.tsx`
  - `src/components/dither-kit/area.tsx`
  - `src/components/dither-kit/cartesian-canvas.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/line-chart`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/line-chart.json`

#### Pie Chart

- Slug: `pie-chart`
- Docs: `/components/pie-chart`
- Description: Pie and donut charts with interactive legend and tooltip.
- Registry item: `https://leguan-ui.pages.dev/r/pie-chart.json`
- Files:
  - `src/components/dither-kit/block-legend.tsx`
  - `src/components/dither-kit/cartesian-root.tsx`
  - `src/components/dither-kit/chart-context.tsx`
  - `src/components/dither-kit/common-context.tsx`
  - `src/components/dither-kit/dither-paint.ts`
  - `src/components/dither-kit/dot.tsx`
  - `src/components/dither-kit/grid.tsx`
  - `src/components/dither-kit/legend.tsx`
  - `src/components/dither-kit/lib.ts`
  - `src/components/dither-kit/palette.ts`
  - `src/components/dither-kit/polar-context.tsx`
  - `src/components/dither-kit/polar-root.tsx`
  - `src/components/dither-kit/polar.ts`
  - `src/components/dither-kit/reference-line.tsx`
  - `src/components/dither-kit/scales.ts`
  - `src/components/dither-kit/series-context.tsx`
  - `src/components/dither-kit/tooltip.tsx`
  - `src/components/dither-kit/use-chart-dimensions.ts`
  - `src/components/dither-kit/x-axis.tsx`
  - `src/components/dither-kit/y-axis.tsx`
  - `src/components/dither-kit/pie-chart.tsx`
  - `src/components/dither-kit/pie.tsx`
  - `src/components/dither-kit/pie-canvas.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/pie-chart`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/pie-chart.json`

#### Radar Chart

- Slug: `radar-chart`
- Docs: `/components/radar-chart`
- Description: Multi-series radar charts for comparing dimensions.
- Registry item: `https://leguan-ui.pages.dev/r/radar-chart.json`
- Files:
  - `src/components/dither-kit/block-legend.tsx`
  - `src/components/dither-kit/cartesian-root.tsx`
  - `src/components/dither-kit/chart-context.tsx`
  - `src/components/dither-kit/common-context.tsx`
  - `src/components/dither-kit/dither-paint.ts`
  - `src/components/dither-kit/dot.tsx`
  - `src/components/dither-kit/grid.tsx`
  - `src/components/dither-kit/legend.tsx`
  - `src/components/dither-kit/lib.ts`
  - `src/components/dither-kit/palette.ts`
  - `src/components/dither-kit/polar-context.tsx`
  - `src/components/dither-kit/polar-root.tsx`
  - `src/components/dither-kit/polar.ts`
  - `src/components/dither-kit/reference-line.tsx`
  - `src/components/dither-kit/scales.ts`
  - `src/components/dither-kit/series-context.tsx`
  - `src/components/dither-kit/tooltip.tsx`
  - `src/components/dither-kit/use-chart-dimensions.ts`
  - `src/components/dither-kit/x-axis.tsx`
  - `src/components/dither-kit/y-axis.tsx`
  - `src/components/dither-kit/radar-chart.tsx`
  - `src/components/dither-kit/radar.tsx`
  - `src/components/dither-kit/radar-canvas.tsx`
  - `src/components/dither-kit/radar-frame.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/radar-chart`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/radar-chart.json`

#### Sparkline

- Slug: `sparkline`
- Docs: `/components/sparkline`
- Description: Compact decorative trend lines for cards and stat rows.
- Registry item: `https://leguan-ui.pages.dev/r/sparkline.json`
- Files:
  - `src/components/dither-kit/block-legend.tsx`
  - `src/components/dither-kit/cartesian-root.tsx`
  - `src/components/dither-kit/chart-context.tsx`
  - `src/components/dither-kit/common-context.tsx`
  - `src/components/dither-kit/dither-paint.ts`
  - `src/components/dither-kit/dot.tsx`
  - `src/components/dither-kit/grid.tsx`
  - `src/components/dither-kit/legend.tsx`
  - `src/components/dither-kit/lib.ts`
  - `src/components/dither-kit/palette.ts`
  - `src/components/dither-kit/polar-context.tsx`
  - `src/components/dither-kit/polar-root.tsx`
  - `src/components/dither-kit/polar.ts`
  - `src/components/dither-kit/reference-line.tsx`
  - `src/components/dither-kit/scales.ts`
  - `src/components/dither-kit/series-context.tsx`
  - `src/components/dither-kit/tooltip.tsx`
  - `src/components/dither-kit/use-chart-dimensions.ts`
  - `src/components/dither-kit/x-axis.tsx`
  - `src/components/dither-kit/y-axis.tsx`
  - `src/components/dither-kit/sparkline.tsx`
- Install: `pnpm dlx shadcn@latest add @leguan/sparkline`
- Direct URL install: `pnpm dlx shadcn@latest add https://leguan-ui.pages.dev/r/sparkline.json`

## All slugs

- `foundation`
- `buttons`
- `badges`
- `dropdown-menu`
- `inputs`
- `form-controls`
- `cards`
- `glow-card`
- `stat-card`
- `empty-state`
- `alerts`
- `tabs`
- `avatars`
- `skeleton`
- `separator`
- `code`
- `dialog`
- `popover`
- `tooltip`
- `progress`
- `status-indicator`
- `area-chart`
- `bar-chart`
- `line-chart`
- `pie-chart`
- `radar-chart`
- `sparkline`

