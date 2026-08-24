import fs from "node:fs"
import path from "node:path"

const PROJECT_ROOT = process.cwd()

export type ComponentSource = {
  path: string
  filename: string
  code: string
}

export function getComponentSources(files: string[]): ComponentSource[] {
  return files.map((filePath) => {
    const filename = path.basename(filePath)
    const absolutePath = path.join(PROJECT_ROOT, filePath)
    const code = fs.readFileSync(absolutePath, "utf-8")

    return {
      path: filePath,
      filename,
      code,
    }
  })
}
