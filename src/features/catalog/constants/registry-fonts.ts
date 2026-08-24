import { getRegistryPublishUrl } from "@/features/catalog/constants/registry"

const OPEN_RUNDE_FONT_FILES = [
  "OpenRunde-Regular",
  "OpenRunde-Medium",
  "OpenRunde-Semibold",
  "OpenRunde-Bold",
] as const

export function getOpenRundeFontDownloadCommands(
  origin = getRegistryPublishUrl()
) {
  return [
    "mkdir -p public/fonts",
    ...OPEN_RUNDE_FONT_FILES.map(
      (file) =>
        `curl -fsSL ${origin}/fonts/${file}.woff2 -o public/fonts/${file}.woff2`
    ),
  ].join("\n")
}

export const LEGUAN_FONTS_LAYOUT_EXAMPLE = `import { leguanFontVariables } from "@/lib/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${leguanFontVariables} h-full antialiased\`}>
      <body>{children}</body>
    </html>
  )
}`

export const LEGUAN_FONTS_DOCS = [
  "Install Open Runde files into public/fonts before using the local font loader.",
  "Apply leguanFontVariables to your root html element.",
  `Download fonts:\n${getOpenRundeFontDownloadCommands()}`,
].join("\n\n")
