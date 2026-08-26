"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { getCatalogComponent } from "@/features/catalog/constants/components"
import { getLandingPage } from "@/features/catalog/constants/landings"
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
  const landingPage = getLandingPage(pathname)
  const isGetStartedPage = pathname === "/get-started"
  const slug = pathname.startsWith("/components/")
    ? pathname.replace("/components/", "")
    : null
  const component = slug ? getCatalogComponent(slug) : null

  return (
    <Breadcrumb className="min-w-0">
      <BreadcrumbList>
        <BreadcrumbItem>
          {isComponentsIndex ? (
            <BreadcrumbPage className="text-body truncate font-medium">
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
              <BreadcrumbPage className="text-body max-w-[9rem] truncate font-medium sm:max-w-none">
                {component.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
        {isAgentsPage ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-body truncate font-medium">
                AGENTS.md
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
        {isGetStartedPage ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-body truncate font-medium">
                Get Started
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
        {landingPage ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-body truncate font-medium">
                {landingPage.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
        {isInspirationPage ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-body truncate font-medium">
                Inspiration
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
