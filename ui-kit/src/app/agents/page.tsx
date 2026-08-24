import { generateLeguanAgentsMarkdown } from "@/features/catalog/lib/agents-md"
import { CatalogShell } from "@/features/catalog/components/catalog-shell"
import { CodeSnippet } from "@/components/shared/code-snippet"

export default function AgentsPage() {
  const markdown = generateLeguanAgentsMarkdown()

  return (
    <CatalogShell>
      <CodeSnippet
        code={markdown}
        language="markdown"
        filename="AGENTS.md"
      />
    </CatalogShell>
  )
}
