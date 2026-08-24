import { NextResponse } from "next/server"

import {
  catalogComponentSlugs,
  getCatalogComponent,
} from "@/features/catalog/constants/components"
import {
  buildRegistryIndex,
  buildRegistryItem,
} from "@/features/catalog/lib/build-registry-item"

type RegistryRouteProps = {
  params: Promise<{ name: string }>
}

export function generateStaticParams() {
  return [
    { name: "registry.json" },
    ...catalogComponentSlugs.map((slug) => ({ name: `${slug}.json` })),
  ]
}

export const dynamic = "force-static"

export async function GET(_request: Request, { params }: RegistryRouteProps) {
  const { name } = await params
  const registryName = name.endsWith(".json") ? name.slice(0, -5) : name

  if (registryName === "registry") {
    return NextResponse.json(buildRegistryIndex())
  }

  const component = getCatalogComponent(registryName)

  if (!component) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  return NextResponse.json(buildRegistryItem(component))
}
