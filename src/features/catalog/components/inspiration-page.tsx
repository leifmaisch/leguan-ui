"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardPanel, CardTitle } from "@/components/ui/card"
import { CatalogPageContent } from "@/features/catalog/components/layout/catalog-page-content"
import { CatalogSectionHeading } from "@/features/catalog/components/layout/catalog-section-heading"
import { InspirationShowcase } from "@/features/catalog/components/layout/inspiration-showcase"
import { PreviewSurface } from "@/features/catalog/components/layout/preview-surface"
import { BlogStyleCard } from "@/features/catalog/previews/cards-preview"

const inspirationLinks = [
  {
    name: "Rare UI",
    href: "https://rareui.com",
    note: "Visual direction; blog cards inspired by their display surfaces.",
  },
  {
    name: "coss ui",
    href: "https://coss.com/ui",
    note: "Opaque borders, bottom shadows, and inset depth for physical weight.",
  },
  {
    name: "shadcn/ui",
    href: "https://ui.shadcn.com",
    note: "Primitives, registry patterns, and install workflow.",
  },
  {
    name: "Base UI",
    href: "https://base-ui.com",
    note: "Headless behavior for dialogs, menus, tabs, and more.",
  },
  {
    name: "Phosphor Icons",
    href: "https://phosphoricons.com",
    note: "Icon set used across previews and navigation.",
  },
  {
    name: "dither-kit",
    href: "https://www.tripwire.sh/dither-kit",
    note: "Chart engine and CLI for the chart catalog.",
  },
  {
    name: "Shiki",
    href: "https://shiki.style",
    note: "Syntax highlighting for the Code component.",
  },
]

export function InspirationPage() {
  return (
    <CatalogPageContent>
      <section className="space-y-4">
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Leguan UI is a curated catalog built on open tools and libraries we
            admire. We borrow structure from the shadcn registry model, lean on
            Base UI for accessible primitives, and extend the set with custom
            Leguan components where the defaults need more opinion.
          </p>
          <p>
            Visual polish and motion-forward surfaces take design cues from{" "}
            <a
              href="https://rareui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2"
            >
              Rare UI
            </a>
            , an open collection of animated React components. Our{" "}
            <Link
              href="/components/cards"
              className="font-medium text-foreground underline underline-offset-2"
            >
              Card
            </Link>{" "}
            blog pattern adapts their editorial layout: muted outer frame, inset
            squircle panel, category badge, and author row with arrow affordance.
          </p>
          <p>
            Depth and weight come from{" "}
            <a
              href="https://coss.com/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2"
            >
              coss ui
            </a>
            . Their opaque borders paired with bottom shadows informed our
            surface-depth utilities: cards, inputs, tabs, and buttons read as
            layered planes with crisp edges and a subtle pressed state instead of
            flat overlays.
          </p>
          <p>
            Chart previews and install commands come from{" "}
            <a
              href="https://www.tripwire.sh/dither-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2"
            >
              dither-kit
            </a>
            . UI building blocks follow the shadcn file layout so you can copy
            or install into an existing Tailwind project without a separate
            runtime.
          </p>
        </div>

        <InspirationShowcase
          label="Rare UI"
          description={
            <>
              Guide card from the{" "}
              <Link
                href="/components/cards"
                className="font-medium text-foreground underline underline-offset-2"
              >
                cards
              </Link>{" "}
              preview. Layout inspired by{" "}
              <a
                href="https://rareui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-2"
              >
                rareui.com
              </a>
              .
            </>
          }
        >
          <div className="grid min-h-72 w-full [&>*]:h-full">
            <BlogStyleCard stretch />
          </div>
        </InspirationShowcase>

        <InspirationShowcase
          label="coss ui"
          description={
            <>
              Surface depth on cards and buttons. Weight and layering inspired by{" "}
              <a
                href="https://coss.com/ui"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-2"
              >
                coss.com/ui
              </a>
              .
            </>
          }
        >
          <div className="flex max-w-md flex-col gap-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Raised panel</CardTitle>
              </CardHeader>
              <CardPanel>
                <p className="text-sm text-muted-foreground">
                  Bottom shadow plus inset highlight along the top edge.
                </p>
              </CardPanel>
            </Card>
            <div className="flex flex-wrap gap-2">
              <Button shape="squircle">Default</Button>
              <Button shape="squircle" variant="secondary">Secondary</Button>
            </div>
          </div>
        </InspirationShowcase>

        <PreviewSurface variant="muted" className="divide-y divide-border/60 p-0">
          {inspirationLinks.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-runde text-sm font-medium text-foreground underline-offset-2 hover:underline"
              >
                {item.name}
              </a>
              <p className="text-sm text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </PreviewSurface>
      </section>

      <section className="space-y-4">
        <CatalogSectionHeading variant="label">Disclaimer</CatalogSectionHeading>
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Leguan UI is provided as a reference catalog and component registry.
            It is not affiliated with, endorsed by, or sponsored by the projects
            listed above unless stated otherwise on a specific component page.
          </p>
          <p>
            Third-party packages and install commands may change independently of
            this site. Verify licenses, versions, and security practices before
            adding dependencies to production applications.
          </p>
          <p>
            Components and documentation are offered as-is without warranties of
            any kind. Names, logos, and trademarks belong to their respective
            owners.
          </p>
          <p>
            For machine-readable catalog data and install paths, see{" "}
            <Link
              href="/agents"
              className="font-medium text-foreground underline underline-offset-2"
            >
              AGENTS.md
            </Link>
            .
          </p>
        </div>
      </section>
    </CatalogPageContent>
  )
}
