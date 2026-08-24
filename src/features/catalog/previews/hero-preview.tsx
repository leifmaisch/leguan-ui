import { LeguanLogo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroFrame,
  HeroIntro,
  HeroLabel,
  HeroShowcase,
  HeroTitle,
} from "@/components/ui/hero"

export function HeroPreview() {
  return (
    <Hero>
      <HeroFrame>
        <HeroIntro>
          <HeroLabel>
            <LeguanLogo size="sm" />
            Leguan UI
          </HeroLabel>
          <HeroTitle>Build with components that feel finished</HeroTitle>
          <HeroDescription>
            Install primitives, charts, and website sections from one registry.
            Ship landing pages without rebuilding the same blocks.
          </HeroDescription>
          <HeroActions>
            <Button size="lg" shape="squircle">
              Get started
            </Button>
            <Button size="lg" shape="squircle" variant="outline">
              View docs
            </Button>
          </HeroActions>
        </HeroIntro>
        <HeroShowcase>
          <div className="flex h-full flex-col">
            <div className="flex min-w-0 items-center gap-2 overflow-hidden border-b border-border/70 px-4 py-3 sm:px-5">
              <span className="size-2 shrink-0 rounded-full bg-muted-foreground/25" />
              <span className="size-2 shrink-0 rounded-full bg-muted-foreground/25" />
              <span className="size-2 shrink-0 rounded-full bg-primary/50" />
              <span className="ml-2 min-w-0 truncate text-label">leguan-ui.pages.dev</span>
            </div>
            <div className="flex flex-1 items-center justify-center p-5 sm:p-6">
              <p className="text-label">dashboard preview</p>
            </div>
          </div>
        </HeroShowcase>
      </HeroFrame>
    </Hero>
  )
}
