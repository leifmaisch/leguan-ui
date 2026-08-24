import { cn } from "@/lib/utils"

type CatalogSectionHeadingProps = {
  variant?: "title" | "label"
  children: React.ReactNode
  className?: string
}

export function CatalogSectionHeading({
  variant = "title",
  children,
  className,
}: CatalogSectionHeadingProps) {
  return (
    <h2
      className={cn(
        variant === "label" ? "text-label" : "text-title",
        className
      )}
    >
      {children}
    </h2>
  )
}
