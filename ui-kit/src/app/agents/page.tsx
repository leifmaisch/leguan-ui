import { generateLeguanAgentsMarkdown } from "@/features/catalog/lib/agents-md"
import { CatalogShell } from "@/features/catalog/components/catalog-shell"
import { CodeSnippet } from "@/components/shared/code-snippet"

export default function AgentsPage() {
  const markdown = generateLeguanAgentsMarkdown()

  return (
    <CatalogShell>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="font-runde text-3xl font-bold tracking-tight">AGENTS.md</h1>
          <p className="max-w-2xl text-muted-foreground">
            Machine-readable catalog of all Leguan UI components, paths, and install
            commands.
          </p>
        </div>
        <CodeSnippet
          code={markdown}
          language="markdown"
          filename="AGENTS.md"
        />
      </div>
    </CatalogShell>
  )
}
