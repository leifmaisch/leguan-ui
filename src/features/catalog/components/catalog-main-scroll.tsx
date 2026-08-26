"use client"

import { usePathname } from "next/navigation"

import { ScrollArea } from "@/components/ui/scroll-area"
import { useCatalogScroll } from "@/features/catalog/hooks/use-catalog-scroll"
import { cn } from "@/lib/utils"

const WEBSITE_SECTION_SLUGS = new Set([
  "navbar",
  "hero",
  "features",
  "testimonials",
  "pricing",
  "cta",
  "branding",
  "bento-grid",
  "footer",
])

type CatalogMainScrollProps = {
  children: React.ReactNode
}

function getContentWidthClass(pathname: string) {
  if (pathname === "/landing" || pathname.startsWith("/landing/")) {
    return "max-w-none"
  }

  const slug = pathname.replace("/components/", "")
  if (pathname.startsWith("/components/") && WEBSITE_SECTION_SLUGS.has(slug)) {
    return "max-w-6xl"
  }

  return "max-w-4xl"
}

export function CatalogMainScroll({ children }: CatalogMainScrollProps) {
  const { setViewport } = useCatalogScroll()
  const pathname = usePathname()

  return (
    <ScrollArea
      viewportRef={setViewport}
      viewportClassName="overflow-x-clip"
      className="min-h-0 min-w-0 flex-1"
    >
      <div
        className={cn(
          "mx-auto box-border flex w-full min-w-0 max-w-full flex-col gap-10 px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10",
          getContentWidthClass(pathname)
        )}
      >
        {children}
      </div>
    </ScrollArea>
  )
}
