"use client"

import type { CatalogComponentMeta } from "@/features/catalog/constants/components"
import type { ComponentSource } from "@/features/catalog/lib/get-component-sources"
import {
  getDirectInstallCommand,
  getRegistryAddCommand,
  getRegistryInstallCommand,
  getRegistryItemUrl,
  getRegistryUrlTemplate,
  LEGUAN_REGISTRY_NAMESPACE,
} from "@/features/catalog/constants/registry"
import { CodeSnippet } from "@/components/shared/code-snippet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

  return (
    <section className="space-y-4">
      <h2 className="font-runde text-lg font-semibold tracking-tight">
        Installation
      </h2>

      <Tabs defaultValue="install">
        <TabsList>
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
              <p className="text-sm font-medium text-foreground">
                Install with {component.attribution?.name ?? "the provider CLI"}
              </p>
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
              <p className="text-sm font-medium text-foreground">
                Install by URL
              </p>
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
            <p className="text-sm font-medium text-foreground">
              1. Add the Leguan registry
            </p>
            <CodeSnippet
              code={registryAddCommand}
              language="bash"
              filename="Terminal"
            />
            <p className="text-xs text-muted-foreground">
              Registry URL template:{" "}
              <span className="font-mono">{registryTemplate}</span>
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              2. Install from the registry
            </p>
            <CodeSnippet
              code={registryInstallCommand}
              language="bash"
              filename="Terminal"
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              Component registry item
            </p>
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
    </section>
  )
}
