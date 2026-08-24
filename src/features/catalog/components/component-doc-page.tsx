"use client"

import type { CatalogComponentMeta } from "@/features/catalog/constants/components"
import type { ComponentSource } from "@/features/catalog/lib/get-component-sources"
import { ComponentAttribution } from "@/features/catalog/components/component-attribution"
import { ComponentCardExamples } from "@/features/catalog/components/component-card-examples"
import { ComponentInstallGuide } from "@/features/catalog/components/component-install-guide"
import { ComponentPreview } from "@/features/catalog/components/component-preview"
import { ComponentVersions } from "@/features/catalog/components/component-versions"
import { CatalogPageContent } from "@/features/catalog/components/layout/catalog-page-content"
import { getComponentPreview } from "@/features/catalog/previews/registry"

type ComponentDocPageProps = {
  component: CatalogComponentMeta
  sources: ComponentSource[]
}

export function ComponentDocPage({ component, sources }: ComponentDocPageProps) {
  const Preview = getComponentPreview(component.slug)

  if (!Preview) {
    return null
  }

  return (
    <CatalogPageContent>
      <p className="text-description max-w-2xl">{component.description}</p>
      {component.attribution ? (
        <ComponentAttribution
          name={component.attribution.name}
          href={component.attribution.href}
        />
      ) : null}
      <ComponentPreview framed={component.previewFramed ?? true}>
        <Preview />
      </ComponentPreview>
      {component.codeExamples ? (
        <ComponentCardExamples />
      ) : (
        <ComponentVersions component={component} />
      )}
      <ComponentInstallGuide component={component} sources={sources} />
    </CatalogPageContent>
  )
}
