import { ThemeToggle } from "@/components/shared"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { catalogLayout } from "@/features/catalog/constants/layout"
import { cn } from "@/lib/utils"
import { CatalogBreadcrumbs } from "./catalog-breadcrumbs"

export function CatalogHeader() {
  return (
    <header
      className={cn(
        "flex shrink-0 items-center gap-3 border-b bg-background px-4 md:px-6",
        catalogLayout.headerHeight,
        "rounded-t-2xl"
      )}
    >
      <SidebarTrigger className="-ml-1" />
      <div className="flex min-w-0 flex-1 items-center">
        <CatalogBreadcrumbs />
      </div>
      <ThemeToggle />
    </header>
  )
}
