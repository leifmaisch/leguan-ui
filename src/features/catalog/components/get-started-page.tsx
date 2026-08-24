"use client"

import Link from "next/link"

import { CodeSnippet } from "@/components/shared/code-snippet"
import {
  getDirectInstallCommand,
  getRegistryAddCommand,
  getRegistryInstallCommand,
  getRegistryUrlTemplate,
  LEGUAN_REGISTRY_NAMESPACE,
} from "@/features/catalog/constants/registry"
import { CatalogDocSection } from "@/features/catalog/components/layout/catalog-doc-section"
import { CatalogPageContent } from "@/features/catalog/components/layout/catalog-page-content"
import { CatalogSubheading } from "@/features/catalog/components/layout/catalog-subheading"

const registryAddCommand = getRegistryAddCommand()
const foundationInstallCommand = getDirectInstallCommand("foundation")
const buttonInstallCommand = getDirectInstallCommand("buttons")
const buttonRegistryInstallCommand = getRegistryInstallCommand("buttons")
const registryTemplate = getRegistryUrlTemplate()

export function GetStartedPage() {
  return (
    <CatalogPageContent>
      <CatalogDocSection title="Prerequisites">
        <div className="space-y-6">
          <p className="text-description leading-relaxed">
            You need a React project with Tailwind CSS. The shadcn CLI is used
            to add registry files into your app.
          </p>

          <div className="space-y-3">
            <CatalogSubheading>Optional: Initialize shadcn</CatalogSubheading>
            <p className="text-description">
              Skip this if your project already has shadcn configured. For a new
              app, run init once to set up paths, aliases, and globals.
            </p>
            <CodeSnippet
              code="pnpm dlx shadcn@latest init"
              language="bash"
              filename="Terminal"
            />
          </div>
        </div>
      </CatalogDocSection>

      <CatalogDocSection title="Registry setup">
        <div className="space-y-6">
          <div className="space-y-3">
            <CatalogSubheading>1. Add the Leguan registry</CatalogSubheading>
            <CodeSnippet
              code={registryAddCommand}
              language="bash"
              filename="Terminal"
            />
            <p className="text-description">
              Namespace:{" "}
              <span className="font-mono text-foreground">
                {LEGUAN_REGISTRY_NAMESPACE}
              </span>
              . URL template:{" "}
              <span className="font-mono text-foreground">{registryTemplate}</span>
            </p>
          </div>

          <div className="space-y-3">
            <CatalogSubheading>2. Install foundation</CatalogSubheading>
            <p className="text-description">
              Foundation ships shared helpers most components depend on. Prefer
              the direct URL so dependencies resolve without extra registry
              configuration.
            </p>
            <CodeSnippet
              code={foundationInstallCommand}
              language="bash"
              filename="Terminal"
            />
          </div>
        </div>
      </CatalogDocSection>

      <CatalogDocSection title="Install a component">
        <div className="space-y-6">
          <div className="space-y-3">
            <CatalogSubheading>Direct URL install</CatalogSubheading>
            <p className="text-description">
              Works for any catalog slug. Each component page shows the exact
              command for that entry.
            </p>
            <CodeSnippet
              code={buttonInstallCommand}
              language="bash"
              filename="Terminal"
            />
          </div>

          <div className="space-y-3">
            <CatalogSubheading>Registry shorthand</CatalogSubheading>
            <p className="text-description">
              After adding the registry, you can install with the namespace
              prefix.
            </p>
            <CodeSnippet
              code={buttonRegistryInstallCommand}
              language="bash"
              filename="Terminal"
            />
          </div>
        </div>
      </CatalogDocSection>

      <CatalogDocSection title="Next steps">
        <div className="space-y-3 text-description leading-relaxed">
          <p>
            Browse the{" "}
            <Link
              href="/components"
              className="font-medium text-foreground underline underline-offset-2"
            >
              component catalog
            </Link>{" "}
            for live previews and manual copy paths. For agent-oriented machine
            readable docs, open{" "}
            <Link
              href="/agents"
              className="font-medium text-foreground underline underline-offset-2"
            >
              AGENTS.md
            </Link>
            . See{" "}
            <Link
              href="/inspiration"
              className="font-medium text-foreground underline underline-offset-2"
            >
              Inspiration
            </Link>{" "}
            for design credits and third-party references.
          </p>
        </div>
      </CatalogDocSection>
    </CatalogPageContent>
  )
}
