"use client"

import Link from "next/link"

import { getCatalogNavGroups } from "@/features/catalog/constants/components"
import { getCatalogNavIcon } from "@/features/catalog/constants/nav-icons"
import { iconWeight } from "@/components/shared"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const catalogNavGroups = getCatalogNavGroups()

export function ComponentsOverview() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="font-runde text-3xl font-bold tracking-tight">
          Components
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Browse the Leguan UI catalog. Each component has its own page with
          previews, installation guides, and upcoming style versions.
        </p>
      </div>

      {catalogNavGroups.map((group) => (
        <section key={group.title} className="space-y-4">
          <h2 className="font-runde text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            {group.title}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {group.items.map((component) => {
              const Icon = getCatalogNavIcon(component.slug)

              return (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="group block h-full"
                >
                  <Card className="h-full transition-colors group-hover:bg-muted/40">
                    <CardHeader className="gap-3">
                      <div className="flex items-start gap-3">
                        {Icon ? (
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/50 text-foreground">
                            <Icon weight={iconWeight} className="size-4" />
                          </div>
                        ) : null}
                        <div className="min-w-0 space-y-1">
                          <CardTitle className="text-base">
                            {component.label}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {component.description}
                          </CardDescription>
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
    </div>
  )
}
