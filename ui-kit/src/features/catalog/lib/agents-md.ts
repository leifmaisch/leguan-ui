import {
  catalogComponents,
  getCatalogNavGroups,
} from "@/features/catalog/constants/components"

export function generateLeguanAgentsMarkdown() {
  const groups = getCatalogNavGroups()
  const lines = [
    "# Leguan UI",
    "",
    "Component catalog for agents and tooling.",
    "",
    "## Overview",
    "",
    "- Docs base URL: `/components`",
    "- Install style: shadcn/ui compatible",
    "- Package name: `leguan-ui`",
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
      lines.push(`- shadcn name: \`${component.shadcnName}\``)
      lines.push(`- Files:`)
      for (const file of component.files) {
        lines.push(`  - \`${file}\``)
      }
      if (component.dependencies?.length) {
        lines.push(`- Dependencies: ${component.dependencies.map((dep) => `\`${dep}\``).join(", ")}`)
      }
      lines.push(
        `- CLI: \`pnpm dlx shadcn@latest add ${[component.shadcnName, ...(component.dependencies ?? [])].join(" ")}\``,
        ""
      )
    }
  }

  lines.push("## All slugs", "")
  lines.push(catalogComponents.map((component) => `- \`${component.slug}\``).join("\n"))
  lines.push("")

  return lines.join("\n")
}
