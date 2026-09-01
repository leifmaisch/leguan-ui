import {
  AsciiBackground,
  asciiPatterns,
  getAsciiBackground,
  getAsciiBackgroundForPattern,
} from "@/components/ui/background"

export function BackgroundPreview() {
  return (
    <div className="grid gap-6">
      <AsciiBackground
        config={getAsciiBackground("introducing-apiform")}
        variant="hero"
        className="aspect-[21/9] w-full rounded-squircle-lg md:aspect-[2.4/1]"
        overlay={
          <>
            <span className="text-label text-muted-foreground">Product</span>
            <h3 className="mt-2 text-heading text-xl tracking-tight md:text-2xl">
              Procedural ASCII backgrounds
            </h3>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {asciiPatterns.slice(0, 4).map((pattern) => (
          <AsciiBackground
            key={pattern}
            config={getAsciiBackgroundForPattern(pattern)}
            variant="compact"
            className="aspect-[2.2/1] w-full rounded-squircle-md"
            overlay={
              <span className="text-label capitalize text-muted-foreground">
                {pattern}
              </span>
            }
          />
        ))}
      </div>

      <AsciiBackground
        config={getAsciiBackground("custom-cover", {
          pattern: "field",
          seed: 48291,
        })}
        variant="compact"
        className="aspect-[2.2/1] w-full rounded-squircle-md"
        overlay={
          <span className="text-label text-muted-foreground">
            Custom seed · 48291
          </span>
        }
      />
    </div>
  )
}
