import { CatalogHeader } from "./components/catalog-header"
import { CatalogSidebar } from "./components/catalog-sidebar"
import {
  AlertsShowcase,
  AvatarsShowcase,
  BadgesShowcase,
  ButtonsShowcase,
  CardsShowcase,
  FormControlsShowcase,
  InputsShowcase,
  TabsShowcase,
} from "./components/showcases"

export function CatalogPage() {
  return (
    <div className="min-h-full">
      <CatalogHeader />
      <div className="mx-auto flex max-w-6xl gap-10 px-6 py-10">
        <CatalogSidebar />
        <main className="min-w-0 flex-1 space-y-12">
          <div className="space-y-2">
            <h1 className="font-runde text-3xl font-bold tracking-tight">
              Component Library
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              A curated collection of accessible, composable UI components built with
              Next.js, Tailwind CSS, and shadcn/ui.
            </p>
          </div>

          <ButtonsShowcase />
          <BadgesShowcase />
          <InputsShowcase />
          <CardsShowcase />
          <AlertsShowcase />
          <TabsShowcase />
          <AvatarsShowcase />
          <FormControlsShowcase />
        </main>
      </div>
    </div>
  )
}
