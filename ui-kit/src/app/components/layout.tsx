import { CatalogShell } from "@/features/catalog/components/catalog-shell"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CatalogShell>{children}</CatalogShell>
}
