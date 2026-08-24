import { generateLeguanAgentsMarkdown } from "@/features/catalog/lib/agents-md"

export function GET() {
  const markdown = generateLeguanAgentsMarkdown()

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  })
}
