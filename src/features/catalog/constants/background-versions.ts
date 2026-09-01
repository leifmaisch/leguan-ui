import type { ComponentVersionStatus } from "@/features/catalog/constants/component-versions"
import {
  asciiPatterns,
  demoSlugByPattern,
  type AsciiPattern,
} from "@/components/ui/background/patterns"

type VersionDefinition = {
  id: string
  label: string
  status: ComponentVersionStatus
  usage: string
  code: string
}

function createPatternVersion(pattern: AsciiPattern): VersionDefinition {
  const label = pattern.charAt(0).toUpperCase() + pattern.slice(1)
  const slug = demoSlugByPattern[pattern]

  return {
    id: pattern,
    label,
    status: "available",
    usage: `getAsciiBackground("${slug}")`,
    code: `import { AsciiBackground, getAsciiBackground } from "@/components/ui/background"\n\nconst config = getAsciiBackground("${slug}")\n\n<AsciiBackground\n  config={config}\n  variant="compact"\n  className="aspect-[2.2/1] w-full"\n/>`,
  }
}

const customSeedVersion: VersionDefinition = {
  id: "custom-seed",
  label: "Custom seed",
  status: "available",
  usage: 'getAsciiBackground("slug", { pattern: "field", seed: 48291 })',
  code: `import { AsciiBackground, createAsciiBackground, getAsciiBackground } from "@/components/ui/background"\n\n// Override seed while keeping slug-based pattern resolution\nconst fromSlug = getAsciiBackground("my-post", { pattern: "field", seed: 48291 })\n\n// Or build directly from pattern + seed\nconst direct = createAsciiBackground("flow", 12847)\n\n<AsciiBackground config={fromSlug} />\n<AsciiBackground config={direct} seed={999} />`,
}

export const backgroundVersions: VersionDefinition[] = [
  ...asciiPatterns.map(createPatternVersion),
  customSeedVersion,
]
