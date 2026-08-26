import { SparkleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
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

function AuroraBentoVisual({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-muted-foreground">
      <SparkleIcon weight={iconWeight} className="size-7 text-violet-500/70" />
      <span className="text-label">{label}</span>
    </div>
  )
}

export function LandingAuroraBento() {
  return (
    <BentoGrid
      title="Template categories"
      description="Start from motion presets, not blank frames."
    >
      <BentoCell span="large">
        <BentoCellPanel>
          <BentoCellVisual className="min-h-36 sm:min-h-44">
            <AuroraBentoVisual label="SaaS launch" />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>SaaS launch</BentoCellTitle>
            <BentoCellDescription>
              Hero, pricing, and CTA blocks with scroll-linked motion.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <AuroraBentoVisual label="Portfolio" />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Portfolios</BentoCellTitle>
            <BentoCellDescription>Case study grids and reels.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <AuroraBentoVisual label="Event" />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Events</BentoCellTitle>
            <BentoCellDescription>Schedules and speaker rows.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell span="wide">
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Motion library</BentoCellTitle>
            <BentoCellDescription>
              Springs, staggers, and scroll triggers you can remix per breakpoint.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <AuroraBentoVisual label="Publish" />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>One-click publish</BentoCellTitle>
            <BentoCellDescription>Edge deploy with custom domains and SSL.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Team libraries</BentoCellTitle>
            <BentoCellDescription>
              Shared components sync across every project in your workspace.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell span="wide" className="border-0 bg-transparent p-0">
        <FeatureCtaCard href="#" className="h-full min-h-36 w-full">
          Browse all templates
        </FeatureCtaCard>
      </BentoCell>
    </BentoGrid>
  )
}
