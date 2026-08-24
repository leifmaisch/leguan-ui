import { CatalogDocSection } from "@/features/catalog/components/layout/catalog-doc-section"
import { PreviewSurface } from "@/features/catalog/components/layout/preview-surface"

type ComponentPreviewProps = {
  children: React.ReactNode
  className?: string
  framed?: boolean
}

export function ComponentPreview({
  children,
  className,
  framed = true,
}: ComponentPreviewProps) {
  return (
    <CatalogDocSection title="Preview">
      <PreviewSurface
        variant={framed ? "card" : "inline"}
        className={className}
      >
        {children}
      </PreviewSurface>
    </CatalogDocSection>
  )
}
