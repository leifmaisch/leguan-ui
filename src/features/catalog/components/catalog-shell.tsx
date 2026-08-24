"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { catalogLayout } from "@/features/catalog/constants/layout"
import { squircle } from "@/lib/squircle"
import { surfaceDepth } from "@/lib/surface-depth"
import { CatalogScrollProvider } from "@/features/catalog/hooks/use-catalog-scroll"
import { cn } from "@/lib/utils"
import { CatalogHeader } from "./catalog-header"
import { CatalogMainScroll } from "./catalog-main-scroll"
import { CatalogSidebar } from "./catalog-sidebar"

export function CatalogShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="h-svh min-w-0 overflow-hidden bg-sidebar">
      <CatalogScrollProvider>
        <CatalogSidebar />
        <SidebarInset className="h-svh min-h-0 min-w-0 overflow-hidden bg-transparent shadow-none md:m-0 md:rounded-none">
          <div
            className={cn(
              "box-border h-full min-w-0 max-w-full",
              catalogLayout.canvasPadding
            )}
          >
            <div
              style={squircle}
              className={cn(
                "flex h-full min-h-0 min-w-0 max-w-full flex-col overflow-hidden border bg-background",
                catalogLayout.panelRadius,
                surfaceDepth("xl")
              )}
            >
              <CatalogHeader />
              <CatalogMainScroll>{children}</CatalogMainScroll>
            </div>
          </div>
        </SidebarInset>
      </CatalogScrollProvider>
    </SidebarProvider>
  )
}
