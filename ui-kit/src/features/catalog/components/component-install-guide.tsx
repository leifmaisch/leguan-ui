"use client"

import type { CatalogComponentMeta } from "@/features/catalog/constants/components"
import type { ComponentSource } from "@/features/catalog/lib/get-component-sources"
import { CodeSnippet } from "@/components/shared/code-snippet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ComponentInstallGuideProps = {
  component: CatalogComponentMeta
  sources: ComponentSource[]
}

function getCliCommand(component: CatalogComponentMeta) {
  const names = [component.shadcnName, ...(component.dependencies ?? [])]
  return `pnpm dlx shadcn@latest add ${names.join(" ")}`
}

function getDependencyCommand(component: CatalogComponentMeta) {
  if (!component.dependencies?.length) return null
  return `pnpm dlx shadcn@latest add ${component.dependencies.join(" ")}`
}

export function ComponentInstallGuide({
  component,
  sources,
}: ComponentInstallGuideProps) {
  const cliCommand = getCliCommand(component)
  const dependencyCommand = getDependencyCommand(component)

  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="font-runde text-lg font-semibold tracking-tight">
          Installation
        </h2>
        <p className="text-sm text-muted-foreground">
          Install with the CLI or copy the component source manually.
        </p>
      </div>

      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent value="cli" className="mt-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            Run this command in your project root.
          </p>
          <CodeSnippet code={cliCommand} language="bash" filename="Terminal" />
        </TabsContent>
        <TabsContent value="manual" className="mt-4 space-y-6">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Copy each file into your project, preserving the paths below.
            </p>
            {dependencyCommand ? (
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Install dependencies first
                </p>
                <CodeSnippet
                  code={dependencyCommand}
                  language="bash"
                  filename="Terminal"
                />
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            {sources.map((source) => (
              <CodeSnippet
                key={source.path}
                code={source.code}
                language="tsx"
                filename={source.filename}
                filepath={source.path}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
