import path from "node:path"

import {
  catalogComponents,
  type CatalogComponentMeta,
} from "@/features/catalog/constants/components"

const SHADCN_NAME_TO_SLUG: Record<string, string> = {
  button: "buttons",
  badge: "badges",
  input: "inputs",
  textarea: "inputs",
  label: "inputs",
  switch: "form-controls",
  checkbox: "form-controls",
  select: "form-controls",
  card: "cards",
  alert: "alerts",
  tabs: "tabs",
  avatar: "avatars",
  skeleton: "skeleton",
  separator: "separator",
  dialog: "dialog",
  popover: "popover",
  tooltip: "tooltip",
  progress: "progress",
  "dropdown-menu": "dropdown-menu",
}

const NPM_IMPORT_MAP: Record<string, string> = {
  "@base-ui/react": "@base-ui/react",
  "@phosphor-icons/react": "@phosphor-icons/react",
  "class-variance-authority": "class-variance-authority",
  clsx: "clsx",
  "tailwind-merge": "tailwind-merge",
  shiki: "shiki",
  "d3-scale": "d3-scale",
  "d3-shape": "d3-shape",
  motion: "motion",
  react: "react",
  "react-dom": "react-dom",
}

const PACKAGE_VERSIONS: Record<string, string> = {
  "@base-ui/react": "^1.7.0",
  "@phosphor-icons/react": "^2.1.10",
  "class-variance-authority": "^0.7.1",
  clsx: "^2.1.1",
  "tailwind-merge": "^3.6.0",
  shiki: "^4.4.3",
  "d3-scale": "^4.0.2",
  "d3-shape": "^3.2.0",
  motion: "^13.1.1",
}

const DEV_PACKAGE_VERSIONS: Record<string, string> = {
  "tw-animate-css": "^1.4.0",
}

const IMPORT_PATTERN =
  /(?:import|export)\s+(?:type\s+)?(?:[\w*{}\s,]+\s+from\s+)?["']([^"']+)["']/g

function buildUiFileToSlugMap() {
  const map = new Map<string, string>()

  for (const component of catalogComponents) {
    if (component.registryOnly) {
      continue
    }

    for (const filePath of component.files) {
      if (!filePath.includes("/components/ui/")) {
        continue
      }

      const basename = path.basename(filePath, path.extname(filePath))
      map.set(basename, component.slug)
    }
  }

  return map
}

const uiFileToSlug = buildUiFileToSlugMap()

function usesLeguanFoundation(contents: string[]) {
  return contents.some((content) => content.includes("@/lib/"))
}

function usesTailwindAnimate(contents: string[]) {
  return contents.some((content) =>
    /animate-in|animate-out|fade-in|zoom-in|slide-in/.test(content)
  )
}

function resolveImportSlug(importPath: string) {
  if (importPath.startsWith("@/components/ui/")) {
    const basename = importPath.replace("@/components/ui/", "")
    return uiFileToSlug.get(basename) ?? null
  }

  return null
}

function collectImports(contents: string[]) {
  const imports = new Set<string>()

  for (const content of contents) {
    for (const match of content.matchAll(IMPORT_PATTERN)) {
      imports.add(match[1])
    }
  }

  return imports
}

function resolveNpmDependencies(contents: string[]) {
  const imports = collectImports(contents)
  const packages = new Set<string>()

  for (const importPath of imports) {
    if (importPath.startsWith("@/")) {
      continue
    }

    if (importPath.startsWith("@base-ui/react/")) {
      packages.add("@base-ui/react")
      continue
    }

    const rootPackage = importPath.split("/")[0]
    const mapped = NPM_IMPORT_MAP[rootPackage]

    if (mapped) {
      packages.add(mapped)
    }
  }

  return Array.from(packages)
    .sort()
    .map((name) => {
      const version = PACKAGE_VERSIONS[name]
      return version ? `${name}@${version}` : name
    })
}

function resolveDevDependencies(contents: string[]) {
  const devPackages = new Set<string>()

  if (usesTailwindAnimate(contents)) {
    devPackages.add("tw-animate-css")
  }

  return Array.from(devPackages)
    .sort()
    .map((name) => {
      const version = DEV_PACKAGE_VERSIONS[name]
      return version ? `${name}@${version}` : name
    })
}

function resolveDeclaredRegistryDependencies(component: CatalogComponentMeta) {
  const bundled = new Set(
    component.files.map((filePath) => path.basename(filePath, ".tsx"))
  )
  const dependencies = new Set<string>()

  if (!component.dependencies?.length) {
    return dependencies
  }

  for (const dependency of component.dependencies) {
    if (bundled.has(dependency)) {
      continue
    }

    const slug =
      SHADCN_NAME_TO_SLUG[dependency] ??
      catalogComponents.find((item) => item.shadcnName === dependency)?.slug ??
      catalogComponents.find((item) => item.slug === dependency)?.slug

    if (slug && slug !== component.slug) {
      dependencies.add(slug)
    }
  }

  return dependencies
}

function resolveImportedRegistryDependencies(
  component: CatalogComponentMeta,
  contents: string[]
) {
  const bundledPaths = new Set(
    component.files.map((filePath) => filePath.replace(/^src\//, ""))
  )
  const dependencies = new Set<string>()
  const imports = collectImports(contents)

  for (const importPath of imports) {
    if (importPath.startsWith("@/components/ui/")) {
      const relativePath = importPath.replace("@/", "src/") + ".tsx"
      const relativePathTs = importPath.replace("@/", "src/") + ".ts"

      if (bundledPaths.has(relativePath) || bundledPaths.has(relativePathTs)) {
        continue
      }

      const slug = resolveImportSlug(importPath)

      if (slug && slug !== component.slug) {
        dependencies.add(slug)
      }
    }
  }

  return dependencies
}

export function resolveRegistryDependencies(
  component: CatalogComponentMeta,
  contents: string[]
) {
  const dependencies = new Set<string>()

  for (const slug of resolveDeclaredRegistryDependencies(component)) {
    dependencies.add(slug)
  }

  for (const slug of resolveImportedRegistryDependencies(component, contents)) {
    dependencies.add(slug)
  }

  if (
    component.slug !== "foundation" &&
    usesLeguanFoundation(contents)
  ) {
    dependencies.add("foundation")
  }

  dependencies.delete(component.slug)

  return Array.from(dependencies).sort()
}

export function resolveItemNpmDependencies(contents: string[]) {
  return resolveNpmDependencies(contents)
}

export function resolveItemDevDependencies(contents: string[]) {
  return resolveDevDependencies(contents)
}

export function getRegistryFileType(
  filePath: string,
  component: CatalogComponentMeta
) {
  if (filePath.startsWith("src/lib/")) {
    return "registry:lib" as const
  }

  if (filePath.includes("/dither-kit/")) {
    return "registry:ui" as const
  }

  if (component.slug === "foundation") {
    return "registry:lib" as const
  }

  if (component.kind === "custom") {
    const basename = path.basename(filePath, path.extname(filePath))
    return basename === component.slug
      ? ("registry:component" as const)
      : ("registry:ui" as const)
  }

  return "registry:ui" as const
}
