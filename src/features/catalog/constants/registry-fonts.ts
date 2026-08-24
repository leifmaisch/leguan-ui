export const LEGUAN_FONTS_LAYOUT_EXAMPLE = `import { leguanFontVariables } from "@/lib/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${leguanFontVariables} h-full antialiased\`}>
      <body>{children}</body>
    </html>
  )
}`

export const LEGUAN_FONTS_DOCS = [
  "Inter, Rubik, and Geist Mono load from Google Fonts through next/font in src/lib/fonts.ts.",
  "Apply leguanFontVariables to your root html element.",
].join("\n\n")
