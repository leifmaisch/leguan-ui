import {
  AsciiBackground,
  asciiShapes,
  demoSeedByShape,
} from "@/components/ui/background"

export function BackgroundPreview() {
  return (
    <div className="grid gap-6">
      <AsciiBackground
        shape="radial"
        seed={demoSeedByShape.radial}
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
        {asciiShapes.slice(0, 4).map((shape) => (
          <AsciiBackground
            key={shape}
            shape={shape}
            seed={demoSeedByShape[shape]}
            variant="compact"
            className="aspect-[2.2/1] w-full rounded-squircle-md"
            overlay={
              <span className="text-label capitalize text-muted-foreground">
                {shape}
              </span>
            }
          />
        ))}
      </div>
    </div>
  )
}
