import { generateLeguanAgentsMarkdown } from "@/features/catalog/lib/agents-md"
import { CodeSnippet } from "@/components/shared/code-snippet"

export default function AgentsPage() {
  const markdown = generateLeguanAgentsMarkdown()

  return (
    <CodeSnippet
      code={markdown}
      language="markdown"
      filename="AGENTS.md"
    />
  )
}
