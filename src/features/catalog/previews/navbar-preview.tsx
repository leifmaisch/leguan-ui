import Link from "next/link"
import { SparkleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarFrame,
  NavbarLink,
  NavbarLinks,
  NavbarMenuButton,
  NavbarMobileActions,
  NavbarMobileLink,
  NavbarMobileMenu,
} from "@/components/ui/navbar"

const navLinks = [
  { label: "Components", href: "/components" },
  { label: "Charts", href: "/components/area-chart" },
  { label: "Landing", href: "/landing" },
  { label: "Docs", href: "/get-started" },
] as const

export function NavbarPreview({ sticky = false }: { sticky?: boolean }) {
  return (
    <Navbar sticky={sticky}>
      <NavbarFrame>
        <NavbarBrand
          name="Leguan"
          href="/components"
          logo={
            <SparkleIcon weight={iconWeight} className="size-6 text-primary" />
          }
        />
        <NavbarLinks>
          {navLinks.map((link, index) => (
            <NavbarLink
              key={link.label}
              href={link.href}
              label={link.label}
              active={index === 0}
            />
          ))}
        </NavbarLinks>
        <NavbarActions>
          <Button variant="ghost" size="sm" render={<Link href="/agents" />}>
            AGENTS.md
          </Button>
          <Button size="sm" shape="squircle" render={<Link href="/get-started" />}>
            Get started
          </Button>
        </NavbarActions>
        <NavbarMenuButton />
      </NavbarFrame>
      <NavbarMobileMenu>
        {navLinks.map((link, index) => (
          <NavbarMobileLink
            key={link.label}
            href={link.href}
            label={link.label}
            active={index === 0}
          />
        ))}
        <NavbarMobileActions>
          <Button
            className="w-full"
            variant="outline"
            shape="squircle"
            render={<Link href="/agents" />}
          >
            AGENTS.md
          </Button>
          <Button
            className="w-full"
            shape="squircle"
            render={<Link href="/get-started" />}
          >
            Get started
          </Button>
        </NavbarMobileActions>
      </NavbarMobileMenu>
    </Navbar>
  )
}
