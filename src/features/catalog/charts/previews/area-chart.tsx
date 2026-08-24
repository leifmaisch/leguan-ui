"use client"

import {
  Area,
  AreaChart,
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

export function AreaChartPreview() {
  return (
    <ChartFrame height="lg">
      <AreaChart data={monthlyData} config={monthlyConfig} bloom="aura">
        <XAxis dataKey="month" />
        <YAxis />
        <Legend isClickable />
        <Tooltip labelKey="month" />
        <Area dataKey="desktop" variant="gradient" />
        <Area dataKey="mobile" variant="hatched" />
      </AreaChart>
    </ChartFrame>
  )
}
