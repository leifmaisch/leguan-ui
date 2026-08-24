"use client"

import { Legend, Pie, PieChart, Tooltip } from "@/components/dither-kit"
import { ChartFrame } from "@/features/catalog/charts/chart-frame"
import {
  browserConfig,
  browserData,
} from "@/features/catalog/charts/sample-data"

export function PieChartPreview() {
  return (
    <ChartFrame height="lg">
      <PieChart
        data={browserData}
        config={browserConfig}
        dataKey="visitors"
        nameKey="browser"
        innerRadius={0.5}
        bloom="aura"
      >
        <Legend isClickable align="center" />
        <Tooltip />
        <Pie variant="gradient" />
      </PieChart>
    </ChartFrame>
  )
}
