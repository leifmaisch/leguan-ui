import { defaultBrandLogos } from "@/components/shared/brand-logos"
import {
  Branding,
  BrandingGrid,
  BrandingLogo,
} from "@/components/ui/branding"

export function LandingClassicBranding() {
  return (
    <Branding title="Trusted by teams on modern stacks">
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
