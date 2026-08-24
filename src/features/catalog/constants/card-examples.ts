export type CardExample = {
  id: string
  label: string
  description: string
  filename: string
  code: string
}

export const cardExamples: CardExample[] = [
  {
    id: "default",
    label: "Default card",
    description: "Standard card with a header, description, and content panel.",
    filename: "card.tsx",
    code: `import { Card, CardDescription, CardHeader, CardPanel, CardTitle } from "@/components/ui/card"

export function SummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly summary</CardTitle>
        <CardDescription>Overview of your workspace activity.</CardDescription>
      </CardHeader>
      <CardPanel>
        <p className="text-description">
          12 active projects, 3 due this week.
        </p>
      </CardPanel>
    </Card>
  )
}`,
  },
  {
    id: "blog-featured",
    label: "Featured blog",
    description:
      "Highlighted editorial card with a featured badge, gradient surface, and author metadata.",
    filename: "featured-blog-card.tsx",
    code: `import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { squircle } from "@/lib/squircle"

export function FeaturedBlogCard() {
  return (
    <Card className="gap-0 bg-muted/50 p-2">
      <div
        className="relative flex flex-col overflow-hidden rounded-squircle-lg border border-primary/35 bg-primary/5 p-6"
        style={squircle}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_100%,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_65%)]"
        />
        <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-0.5 text-label font-medium text-primary-foreground shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_35%,transparent)]">
          Featured
        </span>
        <Badge className="relative border-primary/25 bg-primary/10 text-label font-medium text-primary">
          Product
        </Badge>
        <h3 className="relative mt-4 text-heading-lg sm:text-heading-xl">
          Privacy-first analytics without cookies
        </h3>
        <p className="relative mt-2 line-clamp-3 text-description leading-relaxed">
          Ship event tracking in minutes with hashed IDs, DNT support, and exports that stay compliant.
        </p>
      </div>
      <div className="flex items-center justify-between gap-3 px-3 pb-1 pt-3">
        <div className="min-w-0">
          <p className="text-body truncate font-medium">Maya Chen</p>
          <p className="text-caption truncate">
            Aug 12, 2026 · 6 min read
          </p>
        </div>
        <ArrowUpRightIcon weight={iconWeight} className="size-5 shrink-0 text-primary" />
      </div>
    </Card>
  )
}`,
  },
  {
    id: "blog",
    label: "Blog card",
    description: "Compact editorial card for guides and secondary posts.",
    filename: "blog-card.tsx",
    code: `import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { squircle } from "@/lib/squircle"

export function BlogCard() {
  return (
    <Card className="gap-0 bg-muted/50 p-2">
      <div
        className="relative flex flex-col overflow-hidden rounded-squircle-lg border border-border/60 bg-card p-6"
        style={squircle}
      >
        <Badge className="relative border-primary/25 bg-primary/10 text-label font-medium text-primary">
          Guide
        </Badge>
        <h3 className="relative mt-4 text-heading-lg sm:text-heading-xl">
          Consent-aware funnels that stay accurate
        </h3>
        <p className="relative mt-2 line-clamp-3 text-description leading-relaxed">
          Measure conversion paths while honoring opt-outs, regional rules, and user preferences by default.
        </p>
      </div>
      <div className="flex items-center justify-between gap-3 px-3 pb-1 pt-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Jordan Lee</p>
        </div>
        <ArrowUpRightIcon weight={iconWeight} className="size-5 shrink-0 text-primary" />
      </div>
    </Card>
  )
}`,
  },
  {
    id: "workspace",
    label: "Workspace form",
    description: "Sign-up card wrapped in a frame with a footer note.",
    filename: "workspace-signup-card.tsx",
    code: `import { WarningCircleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardPanel, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Frame, FrameFooter } from "@/components/ui/frame"
import { Input } from "@/components/ui/input"

export function WorkspaceSignupCard() {
  return (
    <Frame className="w-full self-start">
      <Card>
        <CardHeader>
          <CardTitle>Create your workspace</CardTitle>
          <CardDescription>
            Free to start. No credit card, no sales call.
          </CardDescription>
        </CardHeader>
        <CardPanel>
          <Form className="flex w-full flex-col gap-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="Maya Chen" type="text" />
            </Field>
            <Field>
              <FieldLabel>Workspace</FieldLabel>
              <Input placeholder="acme-app" type="text" />
            </Field>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input placeholder="you@company.com" type="email" />
            </Field>
            <Button className="w-full" shape="squircle" type="submit">
              Create account
            </Button>
          </Form>
        </CardPanel>
      </Card>
      <FrameFooter>
        <div className="flex gap-1.5 text-xs text-muted-foreground">
          <WarningCircleIcon weight={iconWeight} className="size-3.5 shrink-0" />
          <p>Verify your email to finish setup.</p>
        </div>
      </FrameFooter>
    </Frame>
  )
}`,
  },
  {
    id: "checklist",
    label: "Quick start",
    description: "Progress checklist with steps, a callout, and footer actions.",
    filename: "quick-start-card.tsx",
    code: `import { ArrowUpRightIcon, CheckIcon, CircleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardPanel, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { squircle } from "@/lib/squircle"
import { surfaceDepth } from "@/lib/surface-depth"
import { cn } from "@/lib/utils"

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

export function QuickStartCard() {
  const completedCount = setupSteps.filter((step) => step.done).length

  return (
    <Card className="flex flex-col gap-0 overflow-hidden py-0">
      <CardHeader className="border-b px-4 py-4 sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle>Quick start</CardTitle>
            <CardDescription>
              Add Leguan UI to your app in three steps.
            </CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {completedCount}/{setupSteps.length}
          </Badge>
        </div>
        <Progress value={(completedCount / setupSteps.length) * 100} className="mt-4" />
      </CardHeader>
      <CardPanel className="flex flex-1 flex-col gap-2 p-4 sm:p-6">
        {setupSteps.map((step) => (
          <div
            key={step.title}
            className={cn(
              "flex gap-3 rounded-squircle-md border p-3.5",
              step.done ? "border-primary/20 bg-primary/5" : "bg-muted/30"
            )}
          >
            {step.done ? (
              <CheckIcon weight={iconWeight} className="mt-0.5 size-4 shrink-0 text-primary" />
            ) : (
              <CircleIcon weight={iconWeight} className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
            )}
            <div className="min-w-0">
              <p className="text-body font-medium">{step.title}</p>
              <p className="text-description mt-0.5">{step.description}</p>
            </div>
          </div>
        ))}
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
            <p className="mt-2 text-title">
              48 components documented
            </p>
            <p className="text-description mt-1">
              Install commands and source paths live in the catalog.
            </p>
          </div>
        </div>
      </CardPanel>
      <CardFooter className="justify-between px-4 sm:px-6">
        <p className="text-xs text-muted-foreground">About 10 minutes</p>
        <Button variant="outline" size="sm">
          Browse catalog
          <ArrowUpRightIcon weight={iconWeight} />
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
]
