"use client"

import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/dither-kit"
import { ChartFrame } from "@/features/catalog/charts/chart-frame"
import {
  monthlyConfig,
  monthlyData,
} from "@/features/catalog/charts/sample-data"

export function BarChartPreview() {
  return (
    <ChartFrame height="lg">
      <BarChart data={monthlyData} config={monthlyConfig} bloom="aura">
        <XAxis dataKey="month" />
        <YAxis />
        <Legend isClickable />
        <Tooltip labelKey="month" />
        <Bar dataKey="desktop" variant="gradient" />
        <Bar dataKey="mobile" variant="hatched" />
      </BarChart>
    </ChartFrame>
  )
}
