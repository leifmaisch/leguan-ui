import { CatalogSectionHeading } from "@/features/catalog/components/layout/catalog-section-heading"
import { PreviewSurface } from "@/features/catalog/components/layout/preview-surface"

type InspirationShowcaseProps = {
  label: string
  description: React.ReactNode
  children: React.ReactNode
}

export function InspirationShowcase({
  label,
  description,
  children,
}: InspirationShowcaseProps) {
  return (
    <PreviewSurface variant="muted" className="space-y-3">
      <div className="space-y-1">
        <CatalogSectionHeading variant="label">{label}</CatalogSectionHeading>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
      {children}
    </PreviewSurface>
  )
}
