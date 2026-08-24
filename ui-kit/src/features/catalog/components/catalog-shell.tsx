"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { catalogLayout } from "@/features/catalog/constants/layout"
import { CatalogScrollProvider } from "@/features/catalog/hooks/use-catalog-scroll"
import { cn } from "@/lib/utils"
import { CatalogHeader } from "./catalog-header"
import { CatalogMainScroll } from "./catalog-main-scroll"
import { CatalogSidebar } from "./catalog-sidebar"

export function CatalogShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="h-svh overflow-hidden bg-sidebar">
      <CatalogScrollProvider>
        <CatalogSidebar />
        <SidebarInset className="h-svh min-h-0 overflow-hidden bg-transparent shadow-none md:m-0 md:rounded-none">
          <div className={cn("box-border h-full", catalogLayout.canvasPadding)}>
            <div
              className={cn(
                "flex h-full min-h-0 flex-col overflow-hidden border border-border/50 bg-background shadow-xl",
                catalogLayout.panelRadius
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
