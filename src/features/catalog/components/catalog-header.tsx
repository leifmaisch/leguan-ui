import { PrimaryColorSelect, ThemeToggle } from "@/components/shared"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { catalogLayout } from "@/features/catalog/constants/layout"
import { cn } from "@/lib/utils"
import { CatalogBreadcrumbs } from "./catalog-breadcrumbs"

export function CatalogHeader() {
  return (
    <header
      className={cn(
        "flex shrink-0 items-center gap-2 border-b bg-background px-3 md:px-6",
        catalogLayout.headerHeight
      )}
    >
      <SidebarTrigger className="-ml-1" />
      <div className="flex min-w-0 flex-1 items-center">
        <CatalogBreadcrumbs />
      </div>
      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <div className="hidden sm:block">
          <PrimaryColorSelect />
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
