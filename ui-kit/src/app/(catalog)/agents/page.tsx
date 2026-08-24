import { CodeSnippet } from "@/components/shared/code-snippet"
import { readAgentsMarkdown } from "@/features/catalog/lib/read-agents-md"

export default function AgentsPage() {
  const markdown = readAgentsMarkdown()

  return (
    <CodeSnippet
      code={markdown}
      language="markdown"
      filename="AGENTS.md"
    />
  )
}
