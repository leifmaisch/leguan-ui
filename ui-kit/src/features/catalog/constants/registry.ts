export const LEGUAN_REGISTRY_NAMESPACE = "@leguan"

export function getSiteUrl() {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_API_URL

  if (fromEnv) {
    return fromEnv.replace(/\/$/, "")
  }

  if (typeof window !== "undefined") {
    return window.location.origin
  }

  return "http://localhost:3000"
}

export function getRegistryUrlTemplate(origin = getSiteUrl()) {
  return `${origin}/r/{name}.json`
}

export function getRegistryItemUrl(slug: string, origin = getSiteUrl()) {
  return `${origin}/r/${slug}.json`
}

export function getRegistryAddCommand(origin = getSiteUrl()) {
  return `pnpm dlx shadcn@latest registry add ${LEGUAN_REGISTRY_NAMESPACE}=${getRegistryUrlTemplate(origin)}`
}

export function getRegistryInstallCommand(slug: string) {
  return `pnpm dlx shadcn@latest add ${LEGUAN_REGISTRY_NAMESPACE}/${slug}`
}

export function getDirectInstallCommand(slug: string, origin = getSiteUrl()) {
  return `pnpm dlx shadcn@latest add ${getRegistryItemUrl(slug, origin)}`
}
