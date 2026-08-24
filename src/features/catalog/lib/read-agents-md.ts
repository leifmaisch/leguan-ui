import fs from "node:fs"
import path from "node:path"

import { generateLeguanAgentsMarkdown } from "@/features/catalog/lib/agents-md"

const AGENTS_MD_PATH = path.join(process.cwd(), "public", "AGENTS.md")

export function readAgentsMarkdown() {
  if (fs.existsSync(AGENTS_MD_PATH)) {
    return fs.readFileSync(AGENTS_MD_PATH, "utf-8").trimEnd()
  }

  return generateLeguanAgentsMarkdown()
}
