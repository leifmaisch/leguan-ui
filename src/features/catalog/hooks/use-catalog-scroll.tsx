"use client"

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react"

type CatalogScrollContextValue = {
  viewport: HTMLDivElement | null
  setViewport: (node: HTMLDivElement | null) => void
}

const CatalogScrollContext = createContext<CatalogScrollContextValue | null>(null)

export function CatalogScrollProvider({ children }: { children: ReactNode }) {
  const [viewport, setViewportState] = useState<HTMLDivElement | null>(null)

  const setViewport = useCallback((node: HTMLDivElement | null) => {
    setViewportState(node)
  }, [])

  return (
    <CatalogScrollContext.Provider value={{ viewport, setViewport }}>
      {children}
    </CatalogScrollContext.Provider>
  )
}

export function useCatalogScroll() {
  const context = useContext(CatalogScrollContext)

  if (!context) {
    throw new Error("useCatalogScroll must be used within CatalogScrollProvider")
  }

  return context
}
