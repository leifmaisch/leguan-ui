"use client"

import type { CatalogComponentMeta } from "@/features/catalog/constants/components"
import type { ComponentSource } from "@/features/catalog/lib/get-component-sources"
import { ComponentInstallGuide } from "@/features/catalog/components/component-install-guide"
import { ComponentPageHeader } from "@/features/catalog/components/component-page-header"
import { ComponentPreview } from "@/features/catalog/components/component-preview"
import { ComponentVersions } from "@/features/catalog/components/component-versions"
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
    <div className="space-y-10">
      <ComponentPageHeader
        title={component.label}
        description={component.description}
      />
      <ComponentPreview>
        <Preview />
      </ComponentPreview>
      <ComponentInstallGuide component={component} sources={sources} />
      <ComponentVersions />
    </div>
  )
}
