import { CatalogSectionHeading } from "@/features/catalog/components/layout/catalog-section-heading"
import { cn } from "@/lib/utils"

type CatalogDocSectionProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export function CatalogDocSection({
  title,
  children,
  className,
}: CatalogDocSectionProps) {
  return (
    <section className={cn("min-w-0 space-y-4", className)}>
      <CatalogSectionHeading>{title}</CatalogSectionHeading>
      {children}
    </section>
  )
}
