import { squircle } from "@/lib/squircle"
import { surfaceDepth } from "@/lib/surface-depth"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"

type CtaProps = React.ComponentProps<"div"> & {
  asSection?: boolean
}

function Cta({
  asSection = true,
  className,
  children,
  ...props
}: CtaProps) {
  const content = (
    <div
      data-slot="cta"
      style={squircle}
      className={cn(
        "relative flex flex-col items-center gap-6 overflow-hidden rounded-squircle-xl border border-border bg-muted/40 px-6 py-16 text-center sm:gap-8 sm:px-12 sm:py-20",
        surfaceDepth("lg"),
        className
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_70%)]"
      />
      <div className="relative flex w-full flex-col items-center gap-6 sm:gap-8">
        {children}
      </div>
    </div>
  )

  if (asSection) {
    return <Section className="py-0 pb-24 md:pb-32">{content}</Section>
  }

  return content
}

function CtaEyebrow({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cta-eyebrow"
      style={squircle}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2",
        className
      )}
      {...props}
    />
  )
}

function CtaTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="cta-title"
      className={cn(
        "max-w-2xl text-balance text-heading text-3xl sm:text-4xl md:text-5xl",
        className
      )}
      {...props}
    />
  )
}

function CtaDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="cta-description"
      className={cn("max-w-2xl text-balance text-description", className)}
      {...props}
    />
  )
}

function CtaActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cta-actions"
      className={cn(
        "flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center",
        className
      )}
      {...props}
    />
  )
}

export { Cta, CtaActions, CtaDescription, CtaEyebrow, CtaTitle }
