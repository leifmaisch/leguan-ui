import type { ComponentVersionStatus } from "@/features/catalog/constants/component-versions"
import {
  asciiShapes,
  demoSeedByShape,
  type AsciiShape,
} from "@/components/ui/background/patterns"

type VersionDefinition = {
  id: string
  label: string
  status: ComponentVersionStatus
  usage: string
  code: string
  snippet: true
}

function createShapeSnippet(shape: AsciiShape): string {
  const seed = demoSeedByShape[shape]

  return `<AsciiBackground
  shape="${shape}"
  seed={${seed}}
  variant="compact"
  className="aspect-[2.2/1] w-full rounded-squircle-md"
/>`
}

function createShapeVersion(shape: AsciiShape): VersionDefinition {
  const label = shape.charAt(0).toUpperCase() + shape.slice(1)
  const code = createShapeSnippet(shape)

  return {
    id: shape,
    label,
    status: "available",
    usage: code,
    code,
    snippet: true,
  }
}

export const backgroundVersions: VersionDefinition[] =
  asciiShapes.map(createShapeVersion)
