import { SparkleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import {
  Cta,
  CtaActions,
  CtaDescription,
  CtaEyebrow,
  CtaTitle,
} from "@/components/ui/cta"

export function CtaPreview() {
  return (
    <Cta>
      <CtaEyebrow>
        <SparkleIcon weight={iconWeight} className="size-6 text-primary" />
        <span className="text-title">Leguan UI</span>
      </CtaEyebrow>
      <div className="flex max-w-2xl flex-col gap-3">
        <CtaTitle>Go live in minutes</CtaTitle>
        <CtaDescription>
          Free to start. Copy components into your app and customize with your
          brand tokens.
        </CtaDescription>
      </div>
      <CtaActions>
        <Button size="lg" shape="pill">
          Get started
        </Button>
        <Button size="lg" shape="pill" variant="outline">
          Read the docs
        </Button>
      </CtaActions>
    </Cta>
  )
}
