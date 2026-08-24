"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { getCatalogComponent } from "@/features/catalog/constants/components"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function CatalogBreadcrumbs() {
  const pathname = usePathname()
  const isComponentsIndex = pathname === "/components"
  const isAgentsPage = pathname === "/agents"
  const isInspirationPage = pathname === "/inspiration"
  const slug = pathname.startsWith("/components/")
    ? pathname.replace("/components/", "")
    : null
  const component = slug ? getCatalogComponent(slug) : null

  return (
    <Breadcrumb className="min-w-0">
      <BreadcrumbList>
        <BreadcrumbItem>
          {isComponentsIndex ? (
            <BreadcrumbPage className="font-runde font-medium">
              Components
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink render={<Link href="/components" />}>
              Components
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {component ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-runde font-medium">
                {component.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
        {isAgentsPage ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-runde font-medium">
                AGENTS.md
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
        {isInspirationPage ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-runde font-medium">
                Inspiration
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
