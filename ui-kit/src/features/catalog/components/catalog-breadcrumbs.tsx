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
  const slug = pathname.startsWith("/components/")
    ? pathname.replace("/components/", "")
    : null
  const component = slug ? getCatalogComponent(slug) : null

  return (
    <Breadcrumb className="min-w-0">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/components" />}>
            Components
          </BreadcrumbLink>
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
      </BreadcrumbList>
    </Breadcrumb>
  )
}
