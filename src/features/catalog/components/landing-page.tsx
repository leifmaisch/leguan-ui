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
    <div className="relative left-1/2 w-screen -translate-x-1/2">
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
