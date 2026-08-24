import dotenv from "dotenv"
import fs from "node:fs"
import path from "node:path"

dotenv.config({ path: path.join(process.cwd(), ".env"), quiet: true })
dotenv.config({ path: path.join(process.cwd(), ".env.local"), quiet: true })

import {
  catalogRegistrySlugs,
  getCatalogComponent,
} from "../src/features/catalog/constants/components"
import { getSiteUrl } from "../src/features/catalog/constants/registry"
import { generateLeguanAgentsMarkdown } from "../src/features/catalog/lib/agents-md"
import {
  buildRegistryIndex,
  buildRegistryItem,
} from "../src/features/catalog/lib/build-registry-item"

const REGISTRY_DIR = path.join(process.cwd(), "public", "r")
const AGENTS_MD_PATH = path.join(process.cwd(), "public", "AGENTS.md")

function ensureRegistryDir() {
  if (!fs.existsSync(REGISTRY_DIR)) {
    fs.mkdirSync(REGISTRY_DIR, { recursive: true })
    return
  }

  for (const file of fs.readdirSync(REGISTRY_DIR)) {
    if (file.endsWith(".json")) {
      fs.unlinkSync(path.join(REGISTRY_DIR, file))
    }
  }
}

function writeJson(filename: string, data: unknown) {
  const filePath = path.join(REGISTRY_DIR, filename)
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf-8")
}

function writeAgentsMarkdown(markdown: string) {
  fs.writeFileSync(AGENTS_MD_PATH, `${markdown}\n`, "utf-8")
}

function main() {
  const siteUrl = getSiteUrl()

  ensureRegistryDir()

  writeJson("registry.json", buildRegistryIndex())

  for (const slug of catalogRegistrySlugs) {
    const component = getCatalogComponent(slug)

    if (!component) {
      continue
    }

    writeJson(`${slug}.json`, buildRegistryItem(component))
  }

  writeAgentsMarkdown(generateLeguanAgentsMarkdown())

  console.log(
    `Generated ${catalogRegistrySlugs.length + 1} registry files in public/r/`
  )
  console.log(`Site URL: ${siteUrl}`)
  console.log(`Registry index: ${siteUrl}/r/registry.json`)
  console.log(`AGENTS.md: ${siteUrl}/AGENTS.md`)
}

main()
