import { SparkleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import {
  FeatureCard,
  FeatureCtaCard,
  Features,
} from "@/components/ui/features"

function FeaturePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <SparkleIcon weight={iconWeight} className="size-8 text-primary/70" />
        <span className="text-label">{label}</span>
      </div>
    </div>
  )
}

export function FeaturesPreview() {
  return (
    <Features
      title="Build faster with Leguan"
      description="Composable sections and primitives for marketing pages."
    >
      <FeatureCard
        large
        className="sm:col-span-2 lg:row-span-2"
        title="Design system ready"
        visual={<FeaturePlaceholder label="Featured" />}
      />
      <FeatureCard
        title="Squircle surfaces"
        visual={<FeaturePlaceholder label="Surfaces" />}
      />
      <FeatureCard
        title="Chart primitives"
        visual={<FeaturePlaceholder label="Charts" />}
      />
      <FeatureCard
        title="Website sections"
        visual={<FeaturePlaceholder label="Sections" />}
      />
      <FeatureCard
        title="Agent-ready registry"
        visual={<FeaturePlaceholder label="Agents" />}
      />
      <FeatureCtaCard href="#">All features</FeatureCtaCard>
    </Features>
  )
}
