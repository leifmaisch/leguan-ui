import { cn } from "@/lib/utils"

type CatalogPageContentProps = {
  children: React.ReactNode
  className?: string
}

export function CatalogPageContent({
  children,
  className,
}: CatalogPageContentProps) {
  return <div className={cn("space-y-10", className)}>{children}</div>
}
