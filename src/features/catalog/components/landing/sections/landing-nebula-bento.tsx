"use client"

import { Sparkline } from "@/components/dither-kit"
import { FeatureCtaCard } from "@/components/ui/features"
import {
  BentoCell,
  BentoCellContent,
  BentoCellDescription,
  BentoCellPanel,
  BentoCellTitle,
  BentoCellVisual,
  BentoGrid,
} from "@/components/ui/bento-grid"
import { sparklineData } from "@/features/catalog/charts/sample-data"

export function LandingNebulaBento() {
  return (
    <BentoGrid
      title="Metrics without the dashboard bloat"
      description="The essentials indie makers actually check every morning."
    >
      <BentoCell span="large">
        <BentoCellPanel>
          <BentoCellVisual className="min-h-36 sm:min-h-44">
            <Sparkline
              data={sparklineData}
              color="primary"
              bloom="aura"
              className="h-20 w-full sm:h-24"
            />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Real-time visitors</BentoCellTitle>
            <BentoCellDescription>
              Live counts with hashed IDs. No cookie banners slowing your TTFB.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <Sparkline
              data={sparklineData}
              color="negative"
              variant="hatched"
              className="h-10 w-full"
            />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Referrers</BentoCellTitle>
            <BentoCellDescription>Top sources, UTM tags included.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <Sparkline
              data={sparklineData}
              color="primary"
              variant="solid"
              className="h-10 w-full"
            />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Goals</BentoCellTitle>
            <BentoCellDescription>Track signups and checkout clicks.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell span="wide">
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>EU hosting</BentoCellTitle>
            <BentoCellDescription>
              Data stays in-region. DNT respected by default.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <Sparkline
              data={sparklineData}
              color="primary"
              bloom="low"
              className="h-10 w-full"
            />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Bounce rate</BentoCellTitle>
            <BentoCellDescription>Spot pages that lose attention fast.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Weekly digest</BentoCellTitle>
            <BentoCellDescription>
              One email with the numbers that matter. No dashboard login required.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell span="wide" className="border-0 bg-transparent p-0">
        <FeatureCtaCard href="#" className="h-full min-h-36 w-full">
          View all metrics
        </FeatureCtaCard>
      </BentoCell>
    </BentoGrid>
  )
}
