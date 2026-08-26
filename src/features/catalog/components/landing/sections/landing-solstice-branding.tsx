import { defaultBrandLogos } from "@/components/shared/brand-logos"
import {
  Branding,
  BrandingGrid,
  BrandingLogo,
} from "@/components/ui/branding"

export function LandingSolsticeBranding() {
  return (
    <Branding
      title="Trusted by fintech and platform teams"
      description="Copal sits beside the stacks you already deploy on."
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
