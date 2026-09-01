"use client"

import { buildAsciiCells, type AsciiShape } from "@/components/ui/background/patterns"
import { cn } from "@/lib/utils"

type AsciiBackgroundVariant = "hero" | "compact"

type AsciiBackgroundProps = {
  shape: AsciiShape
  seed: number
  className?: string
  variant?: AsciiBackgroundVariant
  overlay?: React.ReactNode
}

const variantConfig = {
  hero: {
    cols: 56,
    rows: 16,
    fontSize: "clamp(6px, 1.1vw, 9px)",
    padding: "p-3 md:p-4",
  },
  compact: {
    cols: 40,
    rows: 12,
    fontSize: "clamp(5px, 0.9vw, 8px)",
    padding: "p-2 md:p-3",
  },
} as const

function AsciiBackground({
  shape,
  seed,
  className,
  variant = "hero",
  overlay,
}: AsciiBackgroundProps) {
  const settings = variantConfig[variant]
  const cells = buildAsciiCells(shape, seed, settings.cols, settings.rows)

  return (
    <div
      data-slot="ascii-background"
      data-shape={shape}
      data-variant={variant}
      className={cn(
        "relative overflow-hidden border border-border bg-inset",
        className
      )}
      role={overlay ? undefined : "img"}
      aria-label={`Abstract ${shape} ASCII pattern`}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklch, var(--foreground) 6%, transparent), transparent 55%, color-mix(in oklch, var(--foreground) 10%, transparent))",
        }}
      />

      <div
        className={cn(
          "absolute inset-0 grid select-none place-content-center font-mono leading-none",
          settings.padding
        )}
        style={{
          gridTemplateColumns: `repeat(${settings.cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${settings.rows}, minmax(0, 1fr))`,
          fontSize: settings.fontSize,
        }}
        aria-hidden
      >
        {cells.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              className="flex items-center justify-center text-foreground"
              style={{ opacity: cell.opacity }}
            >
              {cell.char === " " ? "\u00a0" : cell.char}
            </span>
          ))
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--canvas)_20%,transparent),transparent_35%,color-mix(in_oklch,var(--canvas)_30%,transparent))]" />

      {overlay ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklch,var(--canvas)_92%,transparent),color-mix(in_oklch,var(--canvas)_55%,transparent)_45%,transparent)]" />
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 z-10 px-4 sm:px-6",
              variant === "hero"
                ? "pb-6 pt-24 md:pb-8 md:pt-32"
                : "pb-5 pt-16 md:pb-6 md:pt-20"
            )}
          >
            {overlay}
          </div>
        </>
      ) : null}
    </div>
  )
}

export { AsciiBackground, type AsciiBackgroundProps, type AsciiBackgroundVariant }
