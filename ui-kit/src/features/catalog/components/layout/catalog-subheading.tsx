import { cn } from "@/lib/utils"

type CatalogSubheadingProps = {
  children: React.ReactNode
  className?: string
}

export function CatalogSubheading({
  children,
  className,
}: CatalogSubheadingProps) {
  return (
    <p className={cn("text-sm font-medium text-foreground", className)}>
      {children}
    </p>
  )
}
