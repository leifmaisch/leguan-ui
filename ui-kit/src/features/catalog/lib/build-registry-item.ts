import fs from "node:fs"
import path from "node:path"

import {
  catalogComponents,
  type CatalogComponentMeta,
  isCustomComponent,
} from "@/features/catalog/constants/components"
import {
  getSiteUrl,
} from "@/features/catalog/constants/registry"

const PROJECT_ROOT = process.cwd()

type RegistryFileType = "registry:ui" | "registry:component"

function getRegistryFileType(filePath: string): RegistryFileType {
  return filePath.includes("/leguan/")
    ? "registry:component"
    : "registry:ui"
}

function getRegistryDependencies(component: CatalogComponentMeta) {
  const bundled = new Set(
    component.files.map((filePath) => path.basename(filePath, ".tsx"))
  )

  if (!component.dependencies?.length) {
    return []
  }

  const dependencies = new Set<string>()

  for (const dependency of component.dependencies) {
    if (bundled.has(dependency)) {
      continue
    }

    const match = catalogComponents.find(
      (item) => item.shadcnName === dependency
    )

    if (match) {
      dependencies.add(match.slug)
    }
  }

  return Array.from(dependencies)
}

function readComponentFile(filePath: string) {
  const absolutePath = path.join(PROJECT_ROOT, filePath)
  return fs.readFileSync(absolutePath, "utf-8")
}

export function buildRegistryItem(component: CatalogComponentMeta) {
  const registryDependencies = getRegistryDependencies(component)

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: component.slug,
    type: isCustomComponent(component) ? "registry:component" : "registry:ui",
    title: component.label,
    description: component.description,
    ...(registryDependencies.length
      ? { registryDependencies }
      : {}),
    files: component.files.map((filePath) => ({
      path: filePath,
      content: readComponentFile(filePath),
      type: getRegistryFileType(filePath),
    })),
    meta: {
      links: {
        docs: `${getSiteUrl()}/components/${component.slug}`,
      },
    },
  }
}

export function buildRegistryIndex() {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "leguan",
    homepage: getSiteUrl(),
    items: catalogComponents.map((component) => ({
      name: component.slug,
      type: isCustomComponent(component) ? "registry:component" : "registry:ui",
      title: component.label,
      description: component.description,
    })),
  }
}
