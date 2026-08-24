"use client"

import type { CatalogComponentMeta } from "@/features/catalog/constants/components"
import type { ComponentSource } from "@/features/catalog/lib/get-component-sources"
import {
  getDirectInstallCommand,
  getRegistryAddCommand,
  getRegistryInstallCommand,
  getRegistryItemUrl,
  getRegistryUrlTemplate,
} from "@/features/catalog/constants/registry"
import { CodeSnippet } from "@/components/shared/code-snippet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CatalogDocSection } from "@/features/catalog/components/layout/catalog-doc-section"
import { CatalogSubheading } from "@/features/catalog/components/layout/catalog-subheading"

type ComponentInstallGuideProps = {
  component: CatalogComponentMeta
  sources: ComponentSource[]
}

export function ComponentInstallGuide({
  component,
  sources,
}: ComponentInstallGuideProps) {
  const registryAddCommand = getRegistryAddCommand()
  const registryInstallCommand = getRegistryInstallCommand(component.slug)
  const directInstallCommand = getDirectInstallCommand(component.slug)
  const registryTemplate = getRegistryUrlTemplate()
  const registryItemUrl = getRegistryItemUrl(component.slug)
  const externalInstall = component.install
  const tabCount = externalInstall ? 2 : 3

  return (
    <CatalogDocSection title="Installation" className="min-w-0">
      <Tabs defaultValue="install" className="min-w-0 w-full">
        <TabsList
          className={
            tabCount === 2
              ? "grid h-auto w-full grid-cols-2"
              : "grid h-auto w-full grid-cols-3"
          }
        >
          <TabsTrigger value="install">Install</TabsTrigger>
          {!externalInstall ? (
            <>
              <TabsTrigger value="registry">Registry</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </>
          ) : (
            <TabsTrigger value="manual">Manual</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="install" className="mt-4 space-y-6">
          {externalInstall ? (
            <div className="space-y-3">
              <CatalogSubheading>
                Install with {component.attribution?.name ?? "the provider CLI"}
              </CatalogSubheading>
              <CodeSnippet
                code={externalInstall.command}
                language="bash"
                filename="Terminal"
              />
              {component.attribution ? (
                <p className="text-xs text-muted-foreground">
                  Docs:{" "}
                  <a
                    href={component.attribution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    {component.attribution.href}
                  </a>
                </p>
              ) : null}
            </div>
          ) : (
            <div className="space-y-3">
              <CatalogSubheading>Install by URL</CatalogSubheading>
              <CodeSnippet
                code={directInstallCommand}
                language="bash"
                filename="Terminal"
              />
            </div>
          )}
        </TabsContent>

        {!externalInstall ? (
          <TabsContent value="registry" className="mt-4 space-y-6">
            <div className="space-y-3">
              <CatalogSubheading>1. Add the Leguan registry</CatalogSubheading>
              <CodeSnippet
                code={registryAddCommand}
                language="bash"
                filename="Terminal"
              />
              <p className="text-xs text-muted-foreground">
                Registry URL template:{" "}
                <span className="break-all font-mono">{registryTemplate}</span>
              </p>
            </div>

            <div className="space-y-3">
              <CatalogSubheading>2. Install from the registry</CatalogSubheading>
              <CodeSnippet
                code={registryInstallCommand}
                language="bash"
                filename="Terminal"
              />
            </div>

            <div className="space-y-3">
              <CatalogSubheading>Component registry item</CatalogSubheading>
              <CodeSnippet
                code={registryItemUrl}
                language="bash"
                filename="registry-item.json"
              />
            </div>
          </TabsContent>
        ) : null}

        <TabsContent value="manual" className="mt-4 space-y-6">
          <p className="text-sm text-muted-foreground">
            Copy each file into your project, preserving the paths below.
          </p>

          <div className="space-y-4">
            {sources.map((source) => (
              <CodeSnippet
                key={source.path}
                code={source.code}
                language="tsx"
                filename={source.filename}
                filepath={source.path}
                expandable
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </CatalogDocSection>
  )
}
