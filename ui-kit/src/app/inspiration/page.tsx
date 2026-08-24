import { CatalogShell } from "@/features/catalog/components/catalog-shell"
import { InspirationPage } from "@/features/catalog/components/inspiration-page"

export const metadata = {
  title: "Inspiration | Leguan UI",
  description:
    "Credits, inspiration, and disclaimer for the Leguan UI component catalog.",
}

export default function InspirationRoute() {
  return (
    <CatalogShell>
      <InspirationPage />
    </CatalogShell>
  )
}
