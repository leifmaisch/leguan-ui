import type { ComponentVersionStatus } from "@/features/catalog/constants/component-versions"

type VersionDefinition = {
  id: string
  label: string
  status: ComponentVersionStatus
  usage: string
  code: string
}

export const chartVersionsBySlug: Record<string, VersionDefinition[]> = {
  "area-chart": [
    {
      id: "gradient",
      label: "Gradient",
      status: "available",
      usage: '<Area dataKey="desktop" variant="gradient" />',
      code: `import { AreaChart, Area, XAxis, YAxis, Legend, Tooltip } from "@/components/dither-kit"\n\n<AreaChart data={data} config={config} bloom="aura">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Legend isClickable />\n  <Tooltip labelKey="month" />\n  <Area dataKey="desktop" variant="gradient" />\n  <Area dataKey="mobile" variant="hatched" />\n</AreaChart>`,
    },
    {
      id: "stacked",
      label: "Stacked",
      status: "available",
      usage: '<AreaChart stackType="stacked">...</AreaChart>',
      code: `import { AreaChart, Area, XAxis, YAxis, Tooltip } from "@/components/dither-kit"\n\n<AreaChart data={data} config={config} stackType="stacked" bloom="low">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Tooltip labelKey="month" />\n  <Area dataKey="desktop" variant="gradient" />\n  <Area dataKey="mobile" variant="hatched" />\n</AreaChart>`,
    },
    {
      id: "dotted",
      label: "Dotted",
      status: "available",
      usage: '<Area dataKey="desktop" variant="dotted" />',
      code: `import { AreaChart, Area, XAxis, YAxis, Tooltip } from "@/components/dither-kit"\n\n<AreaChart data={data} config={config} bloom="low">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Tooltip labelKey="month" />\n  <Area dataKey="desktop" variant="dotted" />\n  <Area dataKey="mobile" variant="solid" />\n</AreaChart>`,
    },
  ],
  "bar-chart": [
    {
      id: "grouped",
      label: "Grouped",
      status: "available",
      usage: "<BarChart data={data} config={config}>...</BarChart>",
      code: `import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from "@/components/dither-kit"\n\n<BarChart data={data} config={config} bloom="aura">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Legend isClickable />\n  <Tooltip labelKey="month" />\n  <Bar dataKey="desktop" variant="gradient" />\n  <Bar dataKey="mobile" variant="hatched" />\n</BarChart>`,
    },
    {
      id: "stacked",
      label: "Stacked",
      status: "available",
      usage: '<BarChart stackType="stacked">...</BarChart>',
      code: `import { BarChart, Bar, XAxis, YAxis, Tooltip } from "@/components/dither-kit"\n\n<BarChart data={data} config={config} stackType="stacked" bloom="low">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Tooltip labelKey="month" />\n  <Bar dataKey="desktop" variant="gradient" />\n  <Bar dataKey="mobile" variant="hatched" />\n</BarChart>`,
    },
    {
      id: "percent",
      label: "Percent",
      status: "available",
      usage: '<BarChart stackType="percent">...</BarChart>',
      code: `import { BarChart, Bar, XAxis, YAxis, Tooltip } from "@/components/dither-kit"\n\n<BarChart data={data} config={config} stackType="percent" bloom="low">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Tooltip labelKey="month" />\n  <Bar dataKey="desktop" variant="gradient" />\n  <Bar dataKey="mobile" variant="hatched" />\n</BarChart>`,
    },
  ],
  "line-chart": [
    {
      id: "solid",
      label: "Solid",
      status: "available",
      usage: '<Line dataKey="desktop" />',
      code: `import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from "@/components/dither-kit"\n\n<LineChart data={data} config={config} bloom="aura">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Legend isClickable />\n  <Tooltip labelKey="month" />\n  <Line dataKey="desktop" />\n  <Line dataKey="mobile" />\n</LineChart>`,
    },
    {
      id: "dashed",
      label: "Dashed",
      status: "available",
      usage: '<Line dataKey="mobile" strokeVariant="dashed" />',
      code: `import { LineChart, Line, XAxis, YAxis, Tooltip } from "@/components/dither-kit"\n\n<LineChart data={data} config={config} bloom="low">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Tooltip labelKey="month" />\n  <Line dataKey="desktop" />\n  <Line dataKey="mobile" strokeVariant="dashed" />\n</LineChart>`,
    },
    {
      id: "single",
      label: "Single series",
      status: "available",
      usage: '<Line dataKey="desktop" />',
      code: `import { LineChart, Line, XAxis, YAxis, Tooltip } from "@/components/dither-kit"\n\n<LineChart data={data} config={config} bloom="aura">\n  <XAxis dataKey="month" />\n  <YAxis />\n  <Tooltip labelKey="month" />\n  <Line dataKey="desktop" />\n</LineChart>`,
    },
  ],
  "pie-chart": [
    {
      id: "donut",
      label: "Donut",
      status: "available",
      usage: '<PieChart innerRadius={0.5}>...</PieChart>',
      code: `import { PieChart, Pie, Legend, Tooltip } from "@/components/dither-kit"\n\n<PieChart data={data} config={config} dataKey="visitors" nameKey="browser" innerRadius={0.5} bloom="aura">\n  <Legend isClickable align="center" />\n  <Tooltip />\n  <Pie variant="gradient" />\n</PieChart>`,
    },
    {
      id: "pie",
      label: "Pie",
      status: "available",
      usage: "<PieChart innerRadius={0}>...</PieChart>",
      code: `import { PieChart, Pie, Legend, Tooltip } from "@/components/dither-kit"\n\n<PieChart data={data} config={config} dataKey="visitors" nameKey="browser" innerRadius={0} bloom="low">\n  <Legend isClickable align="center" />\n  <Tooltip />\n  <Pie variant="gradient" />\n</PieChart>`,
    },
    {
      id: "hatched",
      label: "Hatched",
      status: "available",
      usage: '<Pie variant="hatched" />',
      code: `import { PieChart, Pie, Tooltip } from "@/components/dither-kit"\n\n<PieChart data={data} config={config} dataKey="visitors" nameKey="browser" innerRadius={0.5} bloom="low">\n  <Tooltip />\n  <Pie variant="hatched" />\n</PieChart>`,
    },
  ],
  "radar-chart": [
    {
      id: "gradient",
      label: "Gradient",
      status: "available",
      usage: '<Radar dataKey="desktop" variant="gradient" />',
      code: `import { RadarChart, Radar, Legend, Tooltip } from "@/components/dither-kit"\n\n<RadarChart data={data} config={config} nameKey="skill" bloom="aura">\n  <Legend isClickable align="center" />\n  <Tooltip />\n  <Radar dataKey="desktop" variant="gradient" />\n  <Radar dataKey="mobile" variant="hatched" />\n</RadarChart>`,
    },
    {
      id: "hatched",
      label: "Hatched",
      status: "available",
      usage: '<Radar dataKey="mobile" variant="hatched" />',
      code: `import { RadarChart, Radar, Tooltip } from "@/components/dither-kit"\n\n<RadarChart data={data} config={config} nameKey="skill" bloom="low">\n  <Tooltip />\n  <Radar dataKey="desktop" variant="gradient" />\n  <Radar dataKey="mobile" variant="hatched" />\n</RadarChart>`,
    },
    {
      id: "single",
      label: "Single series",
      status: "available",
      usage: '<Radar dataKey="desktop" />',
      code: `import { RadarChart, Radar, Tooltip } from "@/components/dither-kit"\n\n<RadarChart data={data} config={config} nameKey="skill" bloom="aura">\n  <Tooltip />\n  <Radar dataKey="desktop" variant="gradient" />\n</RadarChart>`,
    },
  ],
  sparkline: [
    {
      id: "gradient",
      label: "Gradient",
      status: "available",
      usage: '<Sparkline data={data} color="primary" bloom="aura" />',
      code: `import { Sparkline } from "@/components/dither-kit"\n\n<Sparkline data={[3, 7, 5, 9, 8, 12]} color="primary" bloom="aura" className="h-10 w-32" />`,
    },
    {
      id: "hatched",
      label: "Hatched",
      status: "available",
      usage: '<Sparkline variant="hatched" color="negative" />',
      code: `import { Sparkline } from "@/components/dither-kit"\n\n<Sparkline data={[3, 7, 5, 9, 8, 12]} color="negative" variant="hatched" className="h-8 w-full" />`,
    },
    {
      id: "solid",
      label: "Solid",
      status: "available",
      usage: '<Sparkline variant="solid" color="primary" />',
      code: `import { Sparkline } from "@/components/dither-kit"\n\n<Sparkline data={[3, 7, 5, 9, 8, 12]} color="primary" variant="solid" className="h-8 w-full" />`,
    },
  ],
}
