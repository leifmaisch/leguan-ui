import fs from "node:fs"
import path from "node:path"

const UI_COMPONENTS_DIR = path.join(process.cwd(), "src/components/ui")

export type ComponentSource = {
  path: string
  filename: string
  code: string
}

export function getComponentSources(files: string[]): ComponentSource[] {
  return files.map((filePath) => {
    const filename = path.basename(filePath)
    const absolutePath = path.join(UI_COMPONENTS_DIR, filename)
    const code = fs.readFileSync(absolutePath, "utf-8")

    return {
      path: filePath,
      filename,
      code,
    }
  })
}
