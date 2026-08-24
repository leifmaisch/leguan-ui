import fs from "node:fs"
import path from "node:path"

import {
  catalogComponents,
  type CatalogComponentMeta,
  isCustomComponent,
} from "@/features/catalog/constants/components"
import {
  LEGUAN_FOUNDATION_CSS,
  LEGUAN_FOUNDATION_CSS_VARS,
  LEGUAN_FONTS_CSS,
  LEGUAN_FONTS_CSS_VARS,
} from "@/features/catalog/constants/registry-theme"
import { LEGUAN_FONTS_DOCS } from "@/features/catalog/constants/registry-fonts"
import {
  getRegistryFileType,
  resolveItemDevDependencies,
  resolveItemNpmDependencies,
  resolveRegistryDependencies,
} from "@/features/catalog/lib/resolve-registry-deps"
import {
  getRegistryItemUrl,
  getRegistryPublishUrl,
} from "@/features/catalog/constants/registry"

const PROJECT_ROOT = process.cwd()

function readComponentFile(filePath: string) {
  const absolutePath = path.join(PROJECT_ROOT, filePath)
  return fs.readFileSync(absolutePath, "utf-8")
}

function readComponentFiles(filePaths: string[]) {
  return filePaths.map((filePath) => readComponentFile(filePath))
}

export function buildRegistryItem(component: CatalogComponentMeta) {
  const fileContents = readComponentFiles(component.files)
  const registryDependencies = resolveRegistryDependencies(
    component,
    fileContents
  )
  const dependencies = resolveItemNpmDependencies(fileContents)
  const devDependencies = resolveItemDevDependencies(fileContents)

  const item: Record<string, unknown> = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: component.slug,
    type:
      component.slug === "foundation" || component.slug === "fonts"
        ? "registry:lib"
        : isCustomComponent(component)
          ? "registry:component"
          : "registry:ui",
    title: component.label,
    description: component.description,
    files: component.files.map((filePath) => ({
      path: filePath,
      content: readComponentFile(filePath),
      type: getRegistryFileType(filePath, component),
    })),
    meta: {
      links: {
        docs: `${getRegistryPublishUrl()}/components/${component.slug}`,
      },
    },
  }

  if (registryDependencies.length) {
    item.registryDependencies = registryDependencies.map((slug) =>
      getRegistryItemUrl(slug)
    )
  }

  if (dependencies.length) {
    item.dependencies = dependencies
  }

  if (devDependencies.length) {
    item.devDependencies = devDependencies
  }

  if (component.slug === "foundation") {
    item.cssVars = LEGUAN_FOUNDATION_CSS_VARS
    item.css = LEGUAN_FOUNDATION_CSS
    item.meta = {
      links: {
        docs: `${getRegistryPublishUrl()}/AGENTS.md`,
      },
    }
  }

  if (component.slug === "fonts") {
    item.cssVars = LEGUAN_FONTS_CSS_VARS
    item.css = LEGUAN_FONTS_CSS
    item.docs = LEGUAN_FONTS_DOCS
    item.meta = {
      links: {
        docs: `${getRegistryPublishUrl()}/get-started`,
      },
    }
  }

  return item
}

export function buildRegistryIndex() {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "leguan",
    homepage: getRegistryPublishUrl(),
    items: catalogComponents.map((component) => ({
      name: component.slug,
      type:
        component.slug === "foundation" || component.slug === "fonts"
          ? "registry:lib"
          : isCustomComponent(component)
            ? "registry:component"
            : "registry:ui",
      title: component.label,
      description: component.description,
    })),
  }
}
