import { Loader2, Mail, Search } from "lucide-react"

import { ShowcaseSection } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ButtonsShowcase() {
  return (
    <ShowcaseSection
      id="buttons"
      title="Buttons"
      description="Trigger actions with multiple variants and sizes."
    >
      <div className="flex flex-wrap items-center gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Search">
          <Search />
        </Button>
        <Button>
          <Mail />
          Login with Email
        </Button>
        <Button disabled>
          <Loader2 className="animate-spin" />
          Loading
        </Button>
      </div>
    </ShowcaseSection>
  )
}
