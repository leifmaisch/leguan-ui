"use client"

import { Legend, Radar, RadarChart, Tooltip } from "@/components/dither-kit"
import { ChartFrame } from "@/features/catalog/charts/chart-frame"
import {
  monthlyConfig,
  skillData,
} from "@/features/catalog/charts/sample-data"

export function RadarChartPreview() {
  return (
    <ChartFrame height="lg">
      <RadarChart data={skillData} config={monthlyConfig} nameKey="skill" bloom="aura">
        <Legend isClickable align="center" />
        <Tooltip />
        <Radar dataKey="desktop" variant="gradient" />
        <Radar dataKey="mobile" variant="hatched" />
      </RadarChart>
    </ChartFrame>
  )
}
