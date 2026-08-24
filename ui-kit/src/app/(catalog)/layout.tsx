import { CatalogShell } from "@/features/catalog/components/catalog-shell"

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CatalogShell>{children}</CatalogShell>
}
