import { ShowcaseSection } from "@/components/shared"
import { Badge } from "@/components/ui/badge"

export function BadgesShowcase() {
  return (
    <ShowcaseSection
      id="badges"
      title="Badges"
      description="Highlight status, labels, and metadata."
    >
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </div>
    </ShowcaseSection>
  )
}
