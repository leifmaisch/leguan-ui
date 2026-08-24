"use client"

import {
  ArrowUpRight,
  Check,
  Circle,
  WarningCircle,
} from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Frame, FrameFooter } from "@/components/ui/frame"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { squircle } from "@/lib/squircle"
import { surfaceDepth } from "@/lib/surface-depth"
import { cn } from "@/lib/utils"

function NormalCard() {
  return (
    <Card className="self-start">
      <CardHeader>
        <CardTitle>Weekly summary</CardTitle>
        <CardDescription>Overview of your workspace activity.</CardDescription>
      </CardHeader>
      <CardPanel>
        <p className="text-sm text-muted-foreground">
          12 active projects, 3 due this week.
        </p>
      </CardPanel>
    </Card>
  )
}

function BlogStyleCard({
  featured = false,
  compact = false,
}: {
  featured?: boolean
  compact?: boolean
}) {
  const badge = featured ? "Product" : "Guide"
  const title = featured
    ? "Privacy-first analytics without cookies"
    : "Consent-aware funnels that stay accurate"
  const description = featured
    ? "Ship event tracking in minutes with hashed IDs, DNT support, and exports that stay compliant."
    : "Measure conversion paths while honoring opt-outs, regional rules, and user preferences by default."
  const author = featured ? "Maya Chen" : "Jordan Lee"

  return (
    <Card className="gap-0 bg-muted/50 p-2">
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-squircle-lg border",
          compact ? "p-4" : "p-6",
          featured
            ? "border-primary/35 bg-primary/5"
            : "border-border/60 bg-card"
        )}
        style={squircle}
      >
        {featured ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_100%,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_65%)]"
          />
        ) : null}
        {featured && !compact ? (
          <span
            className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary-foreground shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_35%,transparent)]"
          >
            Featured
          </span>
        ) : null}
        <Badge
          className="relative border-primary/25 bg-primary/10 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary"
        >
          {badge}
        </Badge>
        <h3
          className={cn(
            "relative mt-4 font-runde font-bold tracking-tight",
            compact ? "text-base" : "text-xl sm:text-2xl"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "relative mt-2 text-sm leading-relaxed text-muted-foreground",
            compact ? "line-clamp-2" : "line-clamp-3"
          )}
        >
          {description}
        </p>
      </div>
      {compact ? null : (
      <div className="flex items-center justify-between gap-3 px-3 pb-1 pt-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{author}</p>
          {featured ? (
            <p className="truncate text-xs text-muted-foreground">
              Aug 12, 2026 · 6 min read
            </p>
          ) : null}
        </div>
        <ArrowUpRight
          weight={iconWeight}
          className="size-5 shrink-0 text-primary"
        />
      </div>
      )}
    </Card>
  )
}

function CreateWorkspaceCard({ compact = false }: { compact?: boolean }) {
  return (
    <Frame className="w-full self-start">
      <Card>
        <CardHeader className={compact ? "px-4 py-4" : undefined}>
          <CardTitle className={compact ? "text-base" : undefined}>
            Create your workspace
          </CardTitle>
          <CardDescription>
            Free to start. No credit card, no sales call.
          </CardDescription>
        </CardHeader>
        <CardPanel className={compact ? "px-4 pb-4" : undefined}>
          <Form className="flex w-full flex-col gap-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="Maya Chen" type="text" />
            </Field>
            {compact ? null : (
              <>
                <Field>
                  <FieldLabel>Workspace</FieldLabel>
                  <Input placeholder="acme-app" type="text" />
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input placeholder="you@company.com" type="email" />
                </Field>
              </>
            )}
            <Button className="w-full" shape="squircle" type="submit">
              Create account
            </Button>
          </Form>
        </CardPanel>
      </Card>
      {compact ? null : (
      <FrameFooter>
        <div className="flex gap-1.5 text-xs text-muted-foreground">
          <WarningCircle weight={iconWeight} className="size-3.5 shrink-0" />
          <p>Verify your email to finish setup.</p>
        </div>
      </FrameFooter>
      )}
    </Frame>
  )
}

const setupSteps = [
  {
    title: "Browse catalog",
    description: "Explore buttons, cards, charts, and overlays.",
    done: true,
  },
  {
    title: "Install components",
    description: "Copy shadcn commands into your project.",
    done: false,
  },
  {
    title: "Apply your tokens",
    description: "Match colors, fonts, and spacing to your brand.",
    done: false,
  },
]

function SetupChecklistCard({ compact = false }: { compact?: boolean }) {
  const completedCount = setupSteps.filter((step) => step.done).length
  const visibleSteps = compact ? setupSteps.slice(0, 2) : setupSteps

  return (
    <Card className={cn("flex flex-col gap-0 overflow-hidden py-0", !compact && "h-full")}>
      <CardHeader className="border-b px-4 py-4 sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className={compact ? "text-base" : undefined}>Quick start</CardTitle>
            <CardDescription>
              Add Leguan components to your app in three steps.
            </CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {completedCount}/{setupSteps.length}
          </Badge>
        </div>
        <Progress value={(completedCount / setupSteps.length) * 100} className="mt-4" />
      </CardHeader>
      <CardPanel className="flex flex-1 flex-col gap-2 p-4 sm:p-6">
        {visibleSteps.map((step) => (
          <div
            key={step.title}
            className={cn(
              "flex gap-3 rounded-squircle-md border p-3.5",
              step.done ? "border-primary/20 bg-primary/5" : "bg-muted/30"
            )}
          >
            {step.done ? (
              <Check
                weight={iconWeight}
                className="mt-0.5 size-4 shrink-0 text-primary"
              />
            ) : (
              <Circle
                weight={iconWeight}
                className="mt-0.5 size-4 shrink-0 text-muted-foreground/60"
              />
            )}
            <div className="min-w-0">
              <p className="text-sm font-medium">{step.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
        {compact ? null : (
        <div
          className={cn(
            "relative mt-2 overflow-hidden rounded-squircle-lg border border-primary/35 bg-primary/5 p-4",
            surfaceDepth("lg")
          )}
          style={squircle}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_100%,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_65%)]"
          />
          <div className="relative">
            <p className="text-label">Catalog</p>
            <p className="mt-2 font-runde text-lg font-semibold tracking-tight">
              48 components documented
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Install commands and source paths live in the catalog.
            </p>
          </div>
        </div>
        )}
      </CardPanel>
      {compact ? null : (
      <CardFooter className="justify-between px-4 sm:px-6">
        <p className="text-xs text-muted-foreground">About 10 minutes</p>
        <Button variant="outline" size="sm">
          Browse catalog
          <ArrowUpRight weight={iconWeight} />
        </Button>
      </CardFooter>
      )}
    </Card>
  )
}

export { BlogStyleCard, CreateWorkspaceCard, NormalCard, SetupChecklistCard }

export function CardsPreview() {
  return (
    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="self-start sm:col-span-2">
        <BlogStyleCard featured />
      </div>
      <div className="self-start">
        <BlogStyleCard />
      </div>
      <div className="self-start">
        <NormalCard />
      </div>
      <div className="self-start">
        <CreateWorkspaceCard />
      </div>
      <div className="sm:col-span-2">
        <SetupChecklistCard />
      </div>
    </div>
  )
}
