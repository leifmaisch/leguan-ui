import { getAgentsDesignGuidelinesLines } from "@/features/catalog/constants/agents-guidelines"
import {
  catalogComponents,
  getCatalogNavGroups,
} from "@/features/catalog/constants/components"
import {
  getDirectInstallCommand,
  getRegistryAddCommand,
  getRegistryInstallCommand,
  getRegistryItemUrl,
  getRegistryUrlTemplate,
  getSiteUrl,
  LEGUAN_REGISTRY_NAMESPACE,
} from "@/features/catalog/constants/registry"

export function getAgentsMarkdownUrl(origin = getSiteUrl()) {
  return `${origin}/AGENTS.md`
}

export function getAgentsIntroPrompt(origin = getSiteUrl()) {
  const url = getAgentsMarkdownUrl(origin)

  return `Read ${url} and use it as the source of truth for Leguan UI components, registry setup, design guidelines, and install commands in this project.`
}

export function generateLeguanAgentsMarkdown() {
  const groups = getCatalogNavGroups()
  const registryTemplate = getRegistryUrlTemplate()
  const lines = [
    "# Leguan UI",
    "",
    "Component catalog for agents and tooling.",
    "",
    "## Overview",
    "",
    "- Docs UI: `/agents`",
    "- Download: `/AGENTS.md`",
    "- Registry URL template: `" + registryTemplate + "`",
    "- Registry namespace: `" + LEGUAN_REGISTRY_NAMESPACE + "`",
    "- Package name: `leguan-ui`",
    "",
    "## Registry setup",
    "",
    "```bash",
    getRegistryAddCommand(),
    "```",
    "",
    "Install foundation first using the direct registry URL:",
    "",
    "```bash",
    getDirectInstallCommand("foundation"),
    "```",
    "",
    "For other components, prefer direct URL installs. The `@leguan/*` shorthand can fail when resolving foundation dependencies unless the registry is configured:",
    "",
    ...getAgentsDesignGuidelinesLines(),
    "## Components",
    "",
  ]

  for (const group of groups) {
    lines.push(`### ${group.title}`, "")

    for (const component of group.items) {
      lines.push(`#### ${component.label}`, "")
      lines.push(`- Slug: \`${component.slug}\``)
      lines.push(`- Docs: \`/components/${component.slug}\``)
      lines.push(`- Description: ${component.description}`)
      lines.push(`- Registry item: \`${getRegistryItemUrl(component.slug)}\``)
      lines.push(`- Files:`)
      for (const file of component.files) {
        lines.push(`  - \`${file}\``)
      }
      if (component.dependencies?.length) {
        lines.push(
          `- Bundled dependencies: ${component.dependencies.map((dep) => `\`${dep}\``).join(", ")}`
        )
      }
      lines.push(`- Install: \`${getRegistryInstallCommand(component.slug)}\``)
      lines.push(
        `- Direct URL install: \`${getDirectInstallCommand(component.slug)}\``,
        ""
      )
    }
  }

  lines.push("## All slugs", "")
  lines.push(
    catalogComponents.map((component) => `- \`${component.slug}\``).join("\n")
  )
  lines.push("")

  return lines.join("\n")
}
