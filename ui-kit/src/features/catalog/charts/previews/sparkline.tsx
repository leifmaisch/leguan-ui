"use client"

import { Sparkline } from "@/components/dither-kit"
import { sparklineData } from "@/features/catalog/charts/sample-data"

export function SparklinePreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-lg border border-border/60 bg-muted/20 px-4 py-3">
        <Sparkline
          data={sparklineData}
          color="primary"
          bloom="aura"
          className="h-10 w-32"
        />
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Weekly signups</p>
          <p className="text-xs text-muted-foreground">+24% vs last week</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Sparkline data={sparklineData} color="primary" bloom="low" className="h-8 w-full" />
        <Sparkline data={sparklineData} color="negative" variant="hatched" className="h-8 w-full" />
        <Sparkline data={sparklineData} color="primary" variant="solid" className="h-8 w-full" />
      </div>
    </div>
  )
}
