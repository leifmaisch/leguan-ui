import { defaultBrandLogos } from "@/components/shared/brand-logos"
import {
  Branding,
  BrandingGrid,
  BrandingLogo,
} from "@/components/ui/branding"

export function LandingAuroraBranding() {
  return (
    <Branding
      title="Ships on the modern front-end stack"
      description="Canopy sites export to Next.js with Tailwind classes preserved."
    >
      <BrandingGrid>
        {defaultBrandLogos.map(({ name, Logo }) => (
          <BrandingLogo key={name} name={name}>
            <Logo />
          </BrandingLogo>
        ))}
      </BrandingGrid>
    </Branding>
  )
}
