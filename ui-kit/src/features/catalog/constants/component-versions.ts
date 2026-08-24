import type { CatalogComponentMeta } from "@/features/catalog/constants/components"
import { chartVersionsBySlug } from "@/features/catalog/charts/versions"

export type ComponentVersionStatus = "available" | "coming-soon"

export type ComponentVersion = {
  id: string
  label: string
  usage: string
  code: string
  status: ComponentVersionStatus
}

function getComponentImportExample(component: CatalogComponentMeta) {
  const file = component.files[0]
  if (!file) {
    return { importPath: "@/components/ui/button", name: "Button" }
  }

  const importPath = `@/${file.replace(/^src\//, "").replace(/\.tsx$/, "")}`
  const base = file.split("/").pop()?.replace(".tsx", "") ?? "component"
  const name = base
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")

  return { importPath, name }
}

function defaultVersion(component: CatalogComponentMeta) {
  const { importPath, name } = getComponentImportExample(component)
  const usage = `<${name} />`

  return {
    usage,
    code: `import { ${name} } from "${importPath}"\n\n${usage}`,
  }
}

const versionsBySlug: Record<
  string,
  { id: string; label: string; status: ComponentVersionStatus }[]
> = {
  buttons: [
    { id: "pill", label: "Pill", status: "available" },
    { id: "squircle", label: "Squircle", status: "available" },
    { id: "accent", label: "Accent", status: "available" },
  ],
  avatars: [
    { id: "default", label: "Default", status: "available" },
    { id: "text", label: "Text", status: "available" },
    { id: "dottext", label: "Dottext", status: "available" },
    { id: "squircle", label: "Squircle", status: "available" },
  ],
  tabs: [{ id: "default", label: "Squircle tabs", status: "available" }],
  separator: [
    { id: "solid", label: "Solid", status: "available" },
    { id: "dashed", label: "Dashed", status: "available" },
    { id: "dotted", label: "Dotted", status: "available" },
  ],
  skeleton: [
    { id: "solid", label: "Solid", status: "available" },
    { id: "dotted", label: "Dotted", status: "available" },
    { id: "shimmer", label: "Shimmer", status: "available" },
  ],
  code: [
    { id: "tsx", label: "TypeScript", status: "available" },
    { id: "bash", label: "Terminal", status: "available" },
    { id: "filepath", label: "With path", status: "available" },
  ],
}

const versionDetailsBySlug: Record<
  string,
  Record<string, { usage: string; code: string }>
> = {
  buttons: {
    pill: {
      usage: "<Button>Get started</Button>",
      code: `import { Button } from "@/components/ui/button"\n\n<Button>Get started</Button>`,
    },
    squircle: {
      usage: '<Button shape="squircle">Get started</Button>',
      code: `import { Button } from "@/components/ui/button"\n\n<Button shape="squircle">Get started</Button>`,
    },
    accent: {
      usage:
        '<Button shape="squircle" className="bg-[#FFEA00] text-black ...">Get started</Button>',
      code: `import { Button } from "@/components/ui/button"\n\n<Button\n  shape="squircle"\n  className="bg-[#FFEA00] text-black hover:bg-[#E6D400] before:hidden"\n>\n  Get started\n</Button>`,
    },
  },
  avatars: {
    default: {
      usage: "<Avatar><AvatarImage src={src} /><AvatarFallback>CN</AvatarFallback></Avatar>",
      code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\n<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`,
    },
    text: {
      usage: "<Avatar><AvatarFallback>AL</AvatarFallback></Avatar>",
      code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"\n\n<Avatar>\n  <AvatarFallback>AL</AvatarFallback>\n</Avatar>`,
    },
    dottext: {
      usage: "<Avatar><AvatarDottext>AL</AvatarDottext></Avatar>",
      code: `import { Avatar, AvatarDottext } from "@/components/ui/avatar"\n\n<Avatar>\n  <AvatarDottext>AL</AvatarDottext>\n</Avatar>`,
    },
    squircle: {
      usage: '<Avatar shape="squircle">...</Avatar>',
      code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\n<Avatar shape="squircle">\n  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`,
    },
  },
  tabs: {
    default: {
      usage: "<Tabs defaultValue=\"overview\">...</Tabs>",
      code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\n\n<Tabs defaultValue="overview">\n  <TabsList>\n    <TabsTrigger value="overview">Overview</TabsTrigger>\n    <TabsTrigger value="settings">Settings</TabsTrigger>\n  </TabsList>\n  <TabsContent value="overview">...</TabsContent>\n</Tabs>`,
    },
  },
  separator: {
    solid: {
      usage: "<Separator />",
      code: `import { Separator } from "@/components/ui/separator"\n\n<Separator />`,
    },
    dashed: {
      usage: '<Separator variant="dashed" />',
      code: `import { Separator } from "@/components/ui/separator"\n\n<Separator variant="dashed" />`,
    },
    dotted: {
      usage: '<Separator variant="dotted" />',
      code: `import { Separator } from "@/components/ui/separator"\n\n<Separator variant="dotted" />`,
    },
  },
  skeleton: {
    solid: {
      usage: '<Skeleton className="h-4 w-3/5" />',
      code: `import { Skeleton } from "@/components/ui/skeleton"\n\n<Skeleton className="h-4 w-3/5" />`,
    },
    dotted: {
      usage: '<Skeleton variant="dotted" className="h-4 w-3/5" />',
      code: `import { Skeleton } from "@/components/ui/skeleton"\n\n<Skeleton variant="dotted" className="h-4 w-3/5" />`,
    },
    shimmer: {
      usage: '<Skeleton variant="shimmer" className="h-4 w-3/5" />',
      code: `import { Skeleton } from "@/components/ui/skeleton"\n\n<Skeleton variant="shimmer" className="h-4 w-3/5" />`,
    },
  },
  code: {
    tsx: {
      usage:
        '<Code code={code} language="tsx" filename="button.tsx" />',
      code: `import { Code } from "@/components/leguan/code"\n\n<Code code={code} language="tsx" filename="button.tsx" />`,
    },
    bash: {
      usage:
        '<Code code="pnpm dlx shadcn@latest add button" language="bash" filename="Terminal" />',
      code: `import { Code } from "@/components/leguan/code"\n\n<Code\n  code="pnpm dlx shadcn@latest add button"\n  language="bash"\n  filename="Terminal"\n/>`,
    },
    filepath: {
      usage:
        '<Code code={source} language="tsx" filepath="src/components/ui/button.tsx" expandable />',
      code: `import { Code } from "@/components/leguan/code"\n\n<Code\n  code={source}\n  language="tsx"\n  filepath="src/components/ui/button.tsx"\n  expandable\n/>`,
    },
  },
}

export function getComponentVersions(component: CatalogComponentMeta): ComponentVersion[] {
  const chartVersions = chartVersionsBySlug[component.slug]
  if (chartVersions) {
    return chartVersions
  }

  const versions = versionsBySlug[component.slug]
  const details = versionDetailsBySlug[component.slug] ?? {}
  const fallback = defaultVersion(component)

  if (!versions) {
    return [
      {
        id: "default",
        label: "Default",
        status: "available",
        usage: fallback.usage,
        code: fallback.code,
      },
    ]
  }

  return versions.map((version) => {
    const detail = details[version.id] ?? fallback

    return {
      ...version,
      usage: detail.usage,
      code: detail.code,
    }
  })
}
