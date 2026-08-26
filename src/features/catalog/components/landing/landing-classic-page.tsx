"use client"

import { LeguanLogo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { CtaPreview } from "@/features/catalog/previews/cta-preview"
import { FooterPreview } from "@/features/catalog/previews/footer-preview"
import { PricingPreview } from "@/features/catalog/previews/pricing-preview"
import { TestimonialsPreview } from "@/features/catalog/previews/testimonials-preview"
import { SetupChecklistCard } from "@/features/catalog/previews/cards-preview"
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
import { LandingFullBleed } from "./landing-full-bleed"
import { LeguanClassicNavbar } from "./landing-navbars"
import { LandingClassicBento } from "./sections/landing-classic-bento"
import { LandingClassicBranding } from "./sections/landing-classic-branding"

export function LandingClassicPage() {
  return (
    <LandingFullBleed>
      <LeguanClassicNavbar sticky />
      <Hero>
        <HeroFrame>
          <HeroIntro>
            <HeroLabel>
              <LeguanLogo size="sm" />
              Leguan UI
            </HeroLabel>
            <HeroTitle>Build with components that feel finished</HeroTitle>
            <HeroDescription>
              A component registry inspired by shadcn. Install primitives,
              charts, and website sections into your Next.js app in minutes.
            </HeroDescription>
            <HeroActions>
              <Button size="lg" shape="squircle">
                Browse catalog
              </Button>
              <Button size="lg" shape="squircle" variant="outline">
                View docs
              </Button>
            </HeroActions>
          </HeroIntro>
          <HeroShowcase>
            <div className="p-4 sm:p-5">
              <SetupChecklistCard compact />
            </div>
          </HeroShowcase>
        </HeroFrame>
      </Hero>
      <LandingClassicBranding />
      <LandingClassicBento />
      <TestimonialsPreview />
      <PricingPreview />
      <CtaPreview />
      <FooterPreview />
    </LandingFullBleed>
  )
}
