"use client"

import { useServerInsertedHTML } from "next/navigation"

import {
  defaultPrimaryColor,
  PRIMARY_COLOR_STORAGE_KEY,
} from "@/lib/theme-colors"

const themeScript = `
(() => {
  try {
    const root = document.documentElement
    const theme = localStorage.getItem("theme")
    const primary = localStorage.getItem("${PRIMARY_COLOR_STORAGE_KEY}") || "${defaultPrimaryColor}"
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = theme === "dark" || (!theme && prefersDark)
    root.classList.toggle("dark", isDark)
    root.dataset.primary = primary
  } catch {}
})()
`

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  ))

  return null
}
