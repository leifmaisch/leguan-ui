import { defaultBrandLogos } from "@/components/shared/brand-logos"
import {
  Branding,
  BrandingGrid,
  BrandingLogo,
} from "@/components/ui/branding"

export function BrandingPreview() {
  return (
    <Branding
      title="Trusted by teams shipping on modern stacks"
      description="Composable logo slots for Next.js, Cloudflare, Vercel, and other stacks. Marks from Simple Icons."
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
