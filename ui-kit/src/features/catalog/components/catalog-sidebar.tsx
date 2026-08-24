"use client"

import { catalogSections } from "@/features/catalog/constants/sections"
import { cn } from "@/lib/utils"

export function CatalogSidebar() {
  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <nav className="sticky top-24 space-y-1">
        <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Components
        </p>
        {catalogSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            )}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
