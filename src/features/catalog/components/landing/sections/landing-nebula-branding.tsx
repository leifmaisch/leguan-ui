import {
  CloudflareLogo,
  GitHubLogo,
  NextJsLogo,
  VercelLogo,
} from "@/components/shared/brand-logos"
import {
  Branding,
  BrandingGrid,
  BrandingLogo,
} from "@/components/ui/branding"

const nebulaBrands = [
  { name: "Next.js", Logo: NextJsLogo },
  { name: "Cloudflare", Logo: CloudflareLogo },
  { name: "Vercel", Logo: VercelLogo },
  { name: "GitHub", Logo: GitHubLogo },
] as const

export function LandingNebulaBranding() {
  return (
    <Branding
      title="Runs where your sites already live"
      description="Edge-friendly analytics for Next.js apps on Vercel and Cloudflare."
    >
      <BrandingGrid className="sm:grid-cols-2 lg:grid-cols-4">
        {nebulaBrands.map(({ name, Logo }) => (
          <BrandingLogo key={name} name={name}>
            <Logo />
          </BrandingLogo>
        ))}
      </BrandingGrid>
    </Branding>
  )
}
