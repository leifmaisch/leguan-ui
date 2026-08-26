export const landingPages = [
  {
    slug: "",
    href: "/landing",
    label: "Shelter",
    inspiration: "Component registry",
  },
  {
    slug: "ridge",
    href: "/landing/ridge",
    label: "Ridge",
    inspiration: "Privacy analytics",
  },
  {
    slug: "copal",
    href: "/landing/copal",
    label: "Copal",
    inspiration: "Payments API",
  },
  {
    slug: "canopy",
    href: "/landing/canopy",
    label: "Canopy",
    inspiration: "Design tool",
  },
  {
    slug: "quill",
    href: "/landing/quill",
    label: "Quill",
    inspiration: "Publishing",
  },
] as const

export function getLandingPage(pathname: string) {
  return landingPages.find((page) => page.href === pathname)
}
