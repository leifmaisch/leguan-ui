import { SparkleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import {
  BentoCell,
  BentoCellContent,
  BentoCellDescription,
  BentoCellPanel,
  BentoCellTitle,
  BentoCellVisual,
  BentoGrid,
} from "@/components/ui/bento-grid"

function BentoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-muted-foreground">
      <SparkleIcon weight={iconWeight} className="size-7 text-primary/70" />
      <span className="text-label">{label}</span>
    </div>
  )
}

export function BentoGridPreview() {
  return (
    <BentoGrid
      title="Everything in one registry"
      description="A clean bento layout for product highlights without the feature-card arrows."
    >
      <BentoCell span="large">
        <BentoCellPanel>
          <BentoCellVisual>
            <BentoPlaceholder label="Registry" />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Install from one catalog</BentoCellTitle>
            <BentoCellDescription>
              Buttons, charts, overlays, and website sections with copy-paste commands.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <BentoPlaceholder label="Tokens" />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Squircle surfaces</BentoCellTitle>
            <BentoCellDescription>Shared depth and radius tokens.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellVisual className="min-h-20">
            <BentoPlaceholder label="Charts" />
          </BentoCellVisual>
          <BentoCellContent>
            <BentoCellTitle>Dither charts</BentoCellTitle>
            <BentoCellDescription>Area, bar, line, and sparklines.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell span="wide">
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Agent-ready docs</BentoCellTitle>
            <BentoCellDescription>
              AGENTS.md and registry JSON so coding agents pull the right files.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Dark mode</BentoCellTitle>
            <BentoCellDescription>Theme tokens built in.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
    </BentoGrid>
  )
}
