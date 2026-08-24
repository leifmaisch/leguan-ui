"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { FileText } from "@phosphor-icons/react"

import { getCatalogNavGroups } from "@/features/catalog/constants/components"
import { getCatalogNavIcon } from "@/features/catalog/constants/nav-icons"
import { iconWeight } from "@/components/shared"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const catalogNavGroups = getCatalogNavGroups()

function CatalogSidebarNav() {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()

  function handleNavigate() {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <>
      {catalogNavGroups.map((group) => (
        <SidebarGroup key={group.title}>
          <SidebarGroupLabel className="font-runde text-xs tracking-wide">
            {group.title}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => {
                const Icon = getCatalogNavIcon(item.slug)
                const href = `/components/${item.slug}`
                const isActive = pathname === href

                return (
                  <SidebarMenuItem key={item.slug}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.label}
                      render={<Link href={href} onClick={handleNavigate} />}
                      className={cn(
                        "font-medium",
                        isActive && "font-semibold"
                      )}
                    >
                      {Icon ? <Icon weight={iconWeight} /> : null}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}

export function CatalogSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="!border-0 [&_[data-sidebar=sidebar]]:!bg-transparent"
    >
      <SidebarHeader className="px-3 py-4">
        <Link
          href="/components"
          className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center"
        >
          <span className="font-runde truncate text-sm font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
            Leguan UI
          </span>
          <span className="hidden size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-accent font-runde text-xs font-bold text-sidebar-accent-foreground group-data-[collapsible=icon]:flex">
            LU
          </span>
          <Badge
            variant="secondary"
            className="text-[10px] group-data-[collapsible=icon]:hidden"
          >
            v0.1
          </Badge>
        </Link>
      </SidebarHeader>

      <SidebarContent className="bg-transparent">
        <ScrollArea className="h-full px-2">
          <CatalogSidebarNav />
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="p-2 group-data-[collapsible=icon]:hidden">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="AGENTS.md"
              render={<Link href="/agents" />}
              className="font-medium"
            >
              <FileText weight={iconWeight} />
              <span>AGENTS.md</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
