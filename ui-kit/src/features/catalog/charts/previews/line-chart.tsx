"use client"

import {
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/dither-kit"
import { ChartFrame } from "@/features/catalog/charts/chart-frame"
import {
  monthlyConfig,
  monthlyData,
} from "@/features/catalog/charts/sample-data"

export function LineChartPreview() {
  return (
    <ChartFrame height="lg">
      <LineChart data={monthlyData} config={monthlyConfig} bloom="aura">
        <XAxis dataKey="month" />
        <YAxis />
        <Legend isClickable />
        <Tooltip labelKey="month" />
        <Line dataKey="desktop" />
        <Line dataKey="mobile" strokeVariant="dashed" />
      </LineChart>
    </ChartFrame>
  )
}
