import { CircleNotch, EnvelopeSimple, MagnifyingGlass } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ButtonsPreview() {
  return (
    <>
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
          <MagnifyingGlass weight={iconWeight} />
        </Button>
        <Button>
          <EnvelopeSimple weight={iconWeight} />
          Login with Email
        </Button>
        <Button disabled>
          <CircleNotch weight={iconWeight} className="animate-spin" />
          Loading
        </Button>
      </div>
    </>
  )
}
