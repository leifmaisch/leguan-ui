import type {
  CatalogComponentAttribution,
  CatalogComponentInstall,
  CatalogComponentMeta,
} from "@/features/catalog/constants/components"

const DITHER_KIT_PREFIX = "src/components/dither-kit"

export const DITHER_KIT_ATTRIBUTION: CatalogComponentAttribution = {
  name: "dither-kit",
  href: "https://www.tripwire.sh/dither-kit",
}

export const DITHER_KIT_CORE_FILES = [
  `${DITHER_KIT_PREFIX}/block-legend.tsx`,
  `${DITHER_KIT_PREFIX}/cartesian-root.tsx`,
  `${DITHER_KIT_PREFIX}/chart-context.tsx`,
  `${DITHER_KIT_PREFIX}/common-context.tsx`,
  `${DITHER_KIT_PREFIX}/dither-paint.ts`,
  `${DITHER_KIT_PREFIX}/dot.tsx`,
  `${DITHER_KIT_PREFIX}/grid.tsx`,
  `${DITHER_KIT_PREFIX}/legend.tsx`,
  `${DITHER_KIT_PREFIX}/lib.ts`,
  `${DITHER_KIT_PREFIX}/palette.ts`,
  `${DITHER_KIT_PREFIX}/polar-context.tsx`,
  `${DITHER_KIT_PREFIX}/polar-root.tsx`,
  `${DITHER_KIT_PREFIX}/polar.ts`,
  `${DITHER_KIT_PREFIX}/reference-line.tsx`,
  `${DITHER_KIT_PREFIX}/scales.ts`,
  `${DITHER_KIT_PREFIX}/series-context.tsx`,
  `${DITHER_KIT_PREFIX}/tooltip.tsx`,
  `${DITHER_KIT_PREFIX}/use-chart-dimensions.ts`,
  `${DITHER_KIT_PREFIX}/x-axis.tsx`,
  `${DITHER_KIT_PREFIX}/y-axis.tsx`,
]

const DITHER_KIT_CHART_FILES = {
  "area-chart": [
    `${DITHER_KIT_PREFIX}/area-chart.tsx`,
    `${DITHER_KIT_PREFIX}/area.tsx`,
    `${DITHER_KIT_PREFIX}/cartesian-canvas.tsx`,
    `${DITHER_KIT_PREFIX}/sparkline.tsx`,
  ],
  "bar-chart": [
    `${DITHER_KIT_PREFIX}/bar-chart.tsx`,
    `${DITHER_KIT_PREFIX}/bar.tsx`,
    `${DITHER_KIT_PREFIX}/bar-canvas.tsx`,
  ],
  "line-chart": [
    `${DITHER_KIT_PREFIX}/area-chart.tsx`,
    `${DITHER_KIT_PREFIX}/area.tsx`,
    `${DITHER_KIT_PREFIX}/cartesian-canvas.tsx`,
  ],
  "pie-chart": [
    `${DITHER_KIT_PREFIX}/pie-chart.tsx`,
    `${DITHER_KIT_PREFIX}/pie.tsx`,
    `${DITHER_KIT_PREFIX}/pie-canvas.tsx`,
  ],
  "radar-chart": [
    `${DITHER_KIT_PREFIX}/radar-chart.tsx`,
    `${DITHER_KIT_PREFIX}/radar.tsx`,
    `${DITHER_KIT_PREFIX}/radar-canvas.tsx`,
    `${DITHER_KIT_PREFIX}/radar-frame.tsx`,
  ],
  sparkline: [`${DITHER_KIT_PREFIX}/sparkline.tsx`],
} as const

export type ChartCatalogSlug = keyof typeof DITHER_KIT_CHART_FILES

export const CHART_CATALOG_SLUGS = Object.keys(
  DITHER_KIT_CHART_FILES
) as ChartCatalogSlug[]

function getChartFiles(slug: ChartCatalogSlug) {
  return [...DITHER_KIT_CORE_FILES, ...DITHER_KIT_CHART_FILES[slug]]
}

function getChartInstall(slug: ChartCatalogSlug): CatalogComponentInstall {
  const cliSlug = slug === "line-chart" || slug === "sparkline" ? "area-chart" : slug

  return {
    command: `pnpm dlx @dither-kit/cli add ${cliSlug}`,
    description:
      "Install with the dither-kit CLI. Requires Tailwind and a shadcn project. Pulls the shared core engine automatically.",
  }
}

export function createChartComponentMeta(
  slug: ChartCatalogSlug,
  label: string,
  description: string
): CatalogComponentMeta {
  return {
    slug,
    label,
    description,
    group: "Charts",
    kind: "custom",
    attribution: DITHER_KIT_ATTRIBUTION,
    install: getChartInstall(slug),
    files: getChartFiles(slug),
  }
}
