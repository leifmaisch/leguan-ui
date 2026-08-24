import { AgentsPage } from "@/features/catalog/components/agents-page"
import { readAgentsMarkdown } from "@/features/catalog/lib/read-agents-md"

export default function Page() {
  const markdown = readAgentsMarkdown()

  return <AgentsPage markdown={markdown} />
}
