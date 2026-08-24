import { notFound } from "next/navigation"

import {
  catalogDocSlugs,
  getCatalogComponent,
} from "@/features/catalog/constants/components"
import { ComponentDocPage } from "@/features/catalog/components/component-doc-page"
import { getComponentSources } from "@/features/catalog/lib/get-component-sources"

type ComponentPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return catalogDocSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ComponentPageProps) {
  const { slug } = await params
  const component = getCatalogComponent(slug)

  if (!component) {
    return {}
  }

  return {
    title: `${component.label} | Leguan UI`,
    description: component.description,
  }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params
  const component = getCatalogComponent(slug)

  if (!component || component.registryOnly) {
    notFound()
  }

  const sources = getComponentSources(component.files)

  return <ComponentDocPage component={component} sources={sources} />
}
