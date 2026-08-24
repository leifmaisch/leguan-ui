"use client"

import { Code } from "@/components/ui/code"

const sampleCode = `import { Button } from "@/components/ui/button"

export function PrimaryAction() {
  return <Button shape="squircle">Get started</Button>
}`

export function CodePreview() {
  return (
    <div className="grid gap-4">
      <Code code={sampleCode} language="tsx" filename="primary-action.tsx" />
      <Code
        code="pnpm dlx shadcn@latest add @leguan/code"
        language="bash"
        filename="Terminal"
      />
    </div>
  )
}
