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
  LEGUAN_REGISTRY_NAMESPACE,
} from "@/features/catalog/constants/registry"

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
    "- Docs base URL: `/components`",
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
