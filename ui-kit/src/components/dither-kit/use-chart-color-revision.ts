"use client"

import { useEffect, useState } from "react"

import { PRIMARY_COLOR_EVENT } from "@/lib/theme-colors"

export function useChartColorRevision() {
  const [revision, setRevision] = useState(0)

  useEffect(() => {
    const bump = () => setRevision((value) => value + 1)

    window.addEventListener(PRIMARY_COLOR_EVENT, bump)

    const observer = new MutationObserver(bump)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-primary"],
    })

    return () => {
      window.removeEventListener(PRIMARY_COLOR_EVENT, bump)
      observer.disconnect()
    }
  }, [])

  return revision
}
