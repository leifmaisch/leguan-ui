"use client"

import Link from "next/link"

import { LeguanLogo, iconWeight } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
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

type LandingNavbarProps = {
  sticky?: boolean
}

export function LeguanClassicNavbar({ sticky = false }: LandingNavbarProps) {
  const links = [
    { label: "Components", href: "/components" },
    { label: "Charts", href: "/components/area-chart" },
    { label: "Landings", href: "/landing" },
    { label: "Docs", href: "/get-started" },
  ] as const

  return (
    <Navbar sticky={sticky}>
      <NavbarFrame>
        <NavbarBrand
          name="Leguan"
          href="/components"
          logo={<LeguanLogo size="sm" />}
        />
        <NavbarLinks>
          {links.map((link, index) => (
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
        {links.map((link, index) => (
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

export function RidgeNavbar({ sticky = false }: LandingNavbarProps) {
  const links = [
    { label: "Dashboard", href: "#" },
    { label: "Sites", href: "#" },
    { label: "Reports", href: "#" },
    { label: "Docs", href: "#" },
  ] as const

  return (
    <Navbar sticky={sticky}>
      <NavbarFrame>
        <NavbarBrand
          name="Ridge"
          href="/landing/ridge"
        />
        <NavbarLinks>
          {links.map((link, index) => (
            <NavbarLink
              key={link.label}
              href={link.href}
              label={link.label}
              active={index === 0}
            />
          ))}
        </NavbarLinks>
        <NavbarActions>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Privacy-first
          </Badge>
          <Button size="sm" shape="squircle">
            Add site
          </Button>
        </NavbarActions>
        <NavbarMenuButton />
      </NavbarFrame>
      <NavbarMobileMenu>
        {links.map((link, index) => (
          <NavbarMobileLink
            key={link.label}
            href={link.href}
            label={link.label}
            active={index === 0}
          />
        ))}
        <NavbarMobileActions>
          <Button className="w-full" shape="squircle">
            Add site
          </Button>
        </NavbarMobileActions>
      </NavbarMobileMenu>
    </Navbar>
  )
}

export function CopalNavbar({ sticky = false }: LandingNavbarProps) {
  const links = [
    { label: "API", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Status", href: "#" },
  ] as const

  return (
    <Navbar sticky={sticky}>
      <NavbarFrame>
        <NavbarBrand
          name="Copal"
          href="/landing/copal"
        />
        <NavbarLinks>
          {links.map((link, index) => (
            <NavbarLink
              key={link.label}
              href={link.href}
              label={link.label}
              active={index === 0}
            />
          ))}
        </NavbarLinks>
        <NavbarActions>
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm" shape="squircle">
            Get API keys
          </Button>
        </NavbarActions>
        <NavbarMenuButton />
      </NavbarFrame>
      <NavbarMobileMenu>
        {links.map((link, index) => (
          <NavbarMobileLink
            key={link.label}
            href={link.href}
            label={link.label}
            active={index === 0}
          />
        ))}
        <NavbarMobileActions>
          <Button className="w-full" shape="squircle">
            Get API keys
          </Button>
        </NavbarMobileActions>
      </NavbarMobileMenu>
    </Navbar>
  )
}

export function CanopyNavbar({ sticky = false }: LandingNavbarProps) {
  const links = [
    { label: "Templates", href: "#" },
    { label: "Showcase", href: "#" },
    { label: "Learn", href: "#" },
    { label: "Pricing", href: "#" },
  ] as const

  return (
    <Navbar sticky={sticky}>
      <NavbarFrame>
        <NavbarBrand
          name="Canopy"
          href="/landing/canopy"
        />
        <NavbarLinks>
          {links.map((link, index) => (
            <NavbarLink
              key={link.label}
              href={link.href}
              label={link.label}
              active={index === 0}
            />
          ))}
        </NavbarLinks>
        <NavbarActions>
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm" shape="squircle">
            Start designing
          </Button>
        </NavbarActions>
        <NavbarMenuButton />
      </NavbarFrame>
      <NavbarMobileMenu>
        {links.map((link, index) => (
          <NavbarMobileLink
            key={link.label}
            href={link.href}
            label={link.label}
            active={index === 0}
          />
        ))}
        <NavbarMobileActions>
          <Button className="w-full" variant="outline" shape="squircle">
            Log in
          </Button>
          <Button className="w-full" shape="squircle">
            Start designing
          </Button>
        </NavbarMobileActions>
      </NavbarMobileMenu>
    </Navbar>
  )
}

export function QuillNavbar({ sticky = false }: LandingNavbarProps) {
  const links = [
    { label: "Stories", href: "#" },
    { label: "Writers", href: "#" },
    { label: "Topics", href: "#" },
    { label: "About", href: "#" },
  ] as const

  return (
    <Navbar sticky={sticky}>
      <NavbarFrame>
        <NavbarBrand
          name="Quill"
          href="/landing/quill"
        />
        <NavbarLinks>
          {links.map((link, index) => (
            <NavbarLink
              key={link.label}
              href={link.href}
              label={link.label}
              active={index === 0}
            />
          ))}
        </NavbarLinks>
        <NavbarActions>
          <Button variant="ghost" size="sm">
            Write
          </Button>
          <Button size="sm" shape="pill">
            Subscribe
          </Button>
        </NavbarActions>
        <NavbarMenuButton />
      </NavbarFrame>
      <NavbarMobileMenu>
        {links.map((link, index) => (
          <NavbarMobileLink
            key={link.label}
            href={link.href}
            label={link.label}
            active={index === 0}
          />
        ))}
        <NavbarMobileActions>
          <Button className="w-full" shape="pill">
            Subscribe
          </Button>
        </NavbarMobileActions>
      </NavbarMobileMenu>
    </Navbar>
  )
}
