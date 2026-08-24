"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { useCatalogScroll } from "@/features/catalog/hooks/use-catalog-scroll"

type CatalogMainScrollProps = {
  children: React.ReactNode
}

export function CatalogMainScroll({ children }: CatalogMainScrollProps) {
  const { setViewport } = useCatalogScroll()

  return (
    <ScrollArea viewportRef={setViewport} className="min-h-0 flex-1">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-8 md:px-6 md:py-10">
        {children}
      </div>
    </ScrollArea>
  )
}
