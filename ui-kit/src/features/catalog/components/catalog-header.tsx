import { ThemeToggle } from "@/components/shared"
import { Badge } from "@/components/ui/badge"

export function CatalogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="font-runde font-semibold tracking-tight">UI Kit</span>
          <Badge variant="secondary" className="text-[10px]">
            v0.1
          </Badge>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
