"use client"

import { CtaPreview } from "@/features/catalog/previews/cta-preview"
import { FeaturesPreview } from "@/features/catalog/previews/features-preview"
import { FooterPreview } from "@/features/catalog/previews/footer-preview"
import { HeroPreview } from "@/features/catalog/previews/hero-preview"
import { NavbarPreview } from "@/features/catalog/previews/navbar-preview"
import { PricingPreview } from "@/features/catalog/previews/pricing-preview"
import { TestimonialsPreview } from "@/features/catalog/previews/testimonials-preview"

export function LandingPage() {
  return (
    <div className="min-w-0 -mx-4 w-[calc(100%+2rem)] max-w-none overflow-x-clip md:-mx-6 md:w-[calc(100%+3rem)]">
      <NavbarPreview sticky />
      <HeroPreview />
      <FeaturesPreview />
      <TestimonialsPreview />
      <PricingPreview />
      <CtaPreview />
      <FooterPreview />
    </div>
  )
}
