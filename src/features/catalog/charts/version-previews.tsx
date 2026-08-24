"use client"

import type { ComponentType } from "react"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  Sparkline,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/dither-kit"
import { ChartFrame } from "@/features/catalog/charts/chart-frame"
import {
  browserConfig,
  browserData,
  monthlyConfig,
  monthlyData,
  skillData,
  sparklineData,
} from "@/features/catalog/charts/sample-data"

type VersionPreviewComponent = ComponentType

const chartVersionPreviews: Record<string, Record<string, VersionPreviewComponent>> = {
  "area-chart": {
    gradient: () => (
      <ChartFrame>
        <AreaChart data={monthlyData} config={monthlyConfig} bloom="low">
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Area dataKey="desktop" variant="gradient" />
          <Area dataKey="mobile" variant="hatched" />
        </AreaChart>
      </ChartFrame>
    ),
    stacked: () => (
      <ChartFrame>
        <AreaChart
          data={monthlyData}
          config={monthlyConfig}
          stackType="stacked"
          bloom="low"
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Area dataKey="desktop" variant="gradient" />
          <Area dataKey="mobile" variant="hatched" />
        </AreaChart>
      </ChartFrame>
    ),
    dotted: () => (
      <ChartFrame>
        <AreaChart data={monthlyData} config={monthlyConfig} bloom="low">
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Area dataKey="desktop" variant="dotted" />
          <Area dataKey="mobile" variant="solid" />
        </AreaChart>
      </ChartFrame>
    ),
  },
  "bar-chart": {
    grouped: () => (
      <ChartFrame>
        <BarChart data={monthlyData} config={monthlyConfig} bloom="low">
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Bar dataKey="desktop" variant="gradient" />
          <Bar dataKey="mobile" variant="hatched" />
        </BarChart>
      </ChartFrame>
    ),
    stacked: () => (
      <ChartFrame>
        <BarChart
          data={monthlyData}
          config={monthlyConfig}
          stackType="stacked"
          bloom="low"
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Bar dataKey="desktop" variant="gradient" />
          <Bar dataKey="mobile" variant="hatched" />
        </BarChart>
      </ChartFrame>
    ),
    percent: () => (
      <ChartFrame>
        <BarChart
          data={monthlyData}
          config={monthlyConfig}
          stackType="percent"
          bloom="low"
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Bar dataKey="desktop" variant="gradient" />
          <Bar dataKey="mobile" variant="hatched" />
        </BarChart>
      </ChartFrame>
    ),
  },
  "line-chart": {
    solid: () => (
      <ChartFrame>
        <LineChart data={monthlyData} config={monthlyConfig} bloom="low">
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Line dataKey="desktop" />
          <Line dataKey="mobile" />
        </LineChart>
      </ChartFrame>
    ),
    dashed: () => (
      <ChartFrame>
        <LineChart data={monthlyData} config={monthlyConfig} bloom="low">
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Line dataKey="desktop" />
          <Line dataKey="mobile" strokeVariant="dashed" />
        </LineChart>
      </ChartFrame>
    ),
    single: () => (
      <ChartFrame>
        <LineChart data={monthlyData} config={monthlyConfig} bloom="low">
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip labelKey="month" />
          <Line dataKey="desktop" />
        </LineChart>
      </ChartFrame>
    ),
  },
  "pie-chart": {
    donut: () => (
      <ChartFrame>
        <PieChart
          data={browserData}
          config={browserConfig}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={0.5}
          bloom="low"
        >
          <Tooltip />
          <Pie variant="gradient" />
        </PieChart>
      </ChartFrame>
    ),
    pie: () => (
      <ChartFrame>
        <PieChart
          data={browserData}
          config={browserConfig}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={0}
          bloom="low"
        >
          <Tooltip />
          <Pie variant="gradient" />
        </PieChart>
      </ChartFrame>
    ),
    hatched: () => (
      <ChartFrame>
        <PieChart
          data={browserData}
          config={browserConfig}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={0.5}
          bloom="low"
        >
          <Tooltip />
          <Pie variant="hatched" />
        </PieChart>
      </ChartFrame>
    ),
  },
  "radar-chart": {
    gradient: () => (
      <ChartFrame>
        <RadarChart data={skillData} config={monthlyConfig} nameKey="skill" bloom="low">
          <Tooltip />
          <Radar dataKey="desktop" variant="gradient" />
          <Radar dataKey="mobile" variant="hatched" />
        </RadarChart>
      </ChartFrame>
    ),
    hatched: () => (
      <ChartFrame>
        <RadarChart data={skillData} config={monthlyConfig} nameKey="skill" bloom="low">
          <Tooltip />
          <Radar dataKey="desktop" variant="gradient" />
          <Radar dataKey="mobile" variant="hatched" />
        </RadarChart>
      </ChartFrame>
    ),
    single: () => (
      <ChartFrame>
        <RadarChart data={skillData} config={monthlyConfig} nameKey="skill" bloom="low">
          <Tooltip />
          <Radar dataKey="desktop" variant="gradient" />
        </RadarChart>
      </ChartFrame>
    ),
  },
  sparkline: {
    gradient: () => (
      <Sparkline
        data={sparklineData}
        color="primary"
        bloom="low"
        className="h-10 w-full"
      />
    ),
    hatched: () => (
      <Sparkline
        data={sparklineData}
        color="negative"
        variant="hatched"
        className="h-10 w-full"
      />
    ),
    solid: () => (
      <Sparkline
        data={sparklineData}
        color="primary"
        variant="solid"
        className="h-10 w-full"
      />
    ),
  },
}

export function getChartVersionPreview(slug: string, versionId: string) {
  return chartVersionPreviews[slug]?.[versionId] ?? null
}

export function hasChartVersionPreview(slug: string) {
  return slug in chartVersionPreviews
}

export function isChartSlug(slug: string) {
  return slug in chartVersionPreviews
}
