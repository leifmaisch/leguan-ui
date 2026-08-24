"use client"

import Link from "next/link"

import { getCatalogNavGroups } from "@/features/catalog/constants/components"
import { getCatalogNavIcon } from "@/features/catalog/constants/nav-icons"
import { iconWeight } from "@/components/shared"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { CatalogPageContent } from "@/features/catalog/components/layout/catalog-page-content"
import { CatalogSectionHeading } from "@/features/catalog/components/layout/catalog-section-heading"

const catalogNavGroups = getCatalogNavGroups()

export function ComponentsOverview() {
  return (
    <CatalogPageContent>
      {catalogNavGroups.map((group) => (
        <section key={group.title} className="space-y-4">
          <CatalogSectionHeading variant="label">{group.title}</CatalogSectionHeading>
          <div className="grid items-start gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {group.items.map((component) => {
              const Icon = getCatalogNavIcon(component.slug)

              return (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="group block"
                >
                  <Card className="transition-colors duration-150 group-hover:bg-muted/50">
                    <CardHeader className="gap-3">
                      <div className="flex items-start gap-3">
                        {Icon ? (
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-squircle-sm border bg-background text-foreground">
                            <Icon weight={iconWeight} className="size-4" />
                          </div>
                        ) : null}
                        <div className="min-w-0">
                          <CardTitle className="text-base">
                            {component.label}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </CatalogPageContent>
  )
}
