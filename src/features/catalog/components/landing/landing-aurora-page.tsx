"use client"

import { SparkleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { EmptyState } from "@/components/ui/empty-state"
import {
  GlowCard,
  GlowCardAction,
  GlowCardDescription,
  GlowCardLabel,
  GlowCardTitle,
} from "@/components/ui/glow-card"
import {
  Footer,
  FooterBar,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLegal,
  FooterMain,
  FooterPanel,
} from "@/components/ui/footer"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroIntro,
  HeroLabel,
  HeroTitle,
} from "@/components/ui/hero"
import { Progress } from "@/components/ui/progress"
import { Section, SectionDescription, SectionHeader, SectionTitle } from "@/components/ui/section"
import { TestimonialCard, Testimonials } from "@/components/ui/testimonials"
import { LandingFullBleed } from "./landing-full-bleed"
import { CanopyNavbar } from "./landing-navbars"
import { LandingAuroraBento } from "./sections/landing-aurora-bento"
import { LandingAuroraBranding } from "./sections/landing-aurora-branding"

export function LandingAuroraPage() {
  return (
    <LandingFullBleed>
      <CanopyNavbar sticky />
      <Hero className="py-10 sm:py-14 md:py-20">
        <HeroIntro className="gap-5 pb-8 sm:pb-10">
          <HeroLabel>
            <span className="text-label font-medium text-violet-600 dark:text-violet-400">
              Design without the handoff
            </span>
          </HeroLabel>
          <HeroTitle>Ship interactive sites from one canvas</HeroTitle>
          <HeroDescription className="max-w-2xl">
            Inspired by motion-first design tools. Canopy combines layout,
            animation, and publish in a single workspace so marketing pages
            never stall in a Figma-to-code loop.
          </HeroDescription>
          <HeroActions>
            <Button size="lg" shape="squircle">
              Start designing
            </Button>
            <Button size="lg" shape="squircle" variant="outline">
              Browse templates
            </Button>
          </HeroActions>
        </HeroIntro>
      </Hero>
      <LandingAuroraBranding />
      <Section className="py-0 pb-10 md:pb-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <GlowCard variant="primary" className="sm:col-span-2 lg:row-span-2 lg:min-h-[300px]">
            <GlowCardLabel>Canvas</GlowCardLabel>
            <GlowCardTitle className="text-heading text-xl sm:text-2xl">
              Responsive breakpoints with live motion curves
            </GlowCardTitle>
            <GlowCardDescription className="max-w-md">
              Tweak easing, stagger, and scroll triggers while the layout reflows
              beside you. No timeline scrubbing in a separate panel.
            </GlowCardDescription>
            <GlowCardAction>
              <Button shape="squircle">Open canvas</Button>
            </GlowCardAction>
          </GlowCard>
          <GlowCard variant="default">
            <GlowCardLabel>Components</GlowCardLabel>
            <GlowCardTitle>240+ blocks</GlowCardTitle>
            <GlowCardDescription>
              Hero, pricing, nav, and chart sections ready to remix.
            </GlowCardDescription>
          </GlowCard>
          <GlowCard variant="muted">
            <GlowCardLabel>Publish</GlowCardLabel>
            <GlowCardTitle>One-click deploy</GlowCardTitle>
            <GlowCardDescription>
              Custom domains, SSL, and edge caching included.
            </GlowCardDescription>
          </GlowCard>
        </div>
      </Section>
      <LandingAuroraBento />
      <Section className="py-0">
        <SectionHeader className="items-start text-left">
          <SectionTitle className="text-left">Project progress</SectionTitle>
          <SectionDescription className="text-left">
            Track how close each launch page is to publish-ready.
          </SectionDescription>
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-squircle-lg border bg-muted/30 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-body font-medium">SaaS launch</p>
              <span className="text-caption text-muted-foreground">82%</span>
            </div>
            <Progress value={82} className="mt-3" />
          </div>
          <div className="rounded-squircle-lg border bg-muted/30 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-body font-medium">Portfolio refresh</p>
              <span className="text-caption text-muted-foreground">54%</span>
            </div>
            <Progress value={54} className="mt-3" />
          </div>
          <div className="rounded-squircle-lg border bg-muted/30 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-body font-medium">Event microsite</p>
              <span className="text-caption text-muted-foreground">96%</span>
            </div>
            <Progress value={96} className="mt-3" />
          </div>
        </div>
      </Section>
      <Section className="py-0">
        <EmptyState
          icon={<SparkleIcon weight={iconWeight} className="size-5" />}
          title="No template selected"
          description="Pick a starting point from the Canopy gallery or duplicate an existing site."
          action={
            <Button shape="squircle" variant="outline">
              Browse gallery
            </Button>
          }
        />
      </Section>
      <Testimonials
        title="Design teams on Canopy"
        description="Studios that replaced static mockups with live builds."
      >
        <TestimonialCard
          featured
          quote="Our motion designer now ships scroll animations herself. Engineering only joins for edge cases."
          name="Lena Vogt"
          role="Creative director, Studio Koto"
        />
        <TestimonialCard
          quote="Client reviews happen on the real URL, not a PDF export. Revisions close in one meeting."
          name="Ravi Menon"
          role="Founder, Framehouse"
        />
        <TestimonialCard
          quote="The component library syncs with our design tokens. Brand updates roll out site-wide in an afternoon."
          name="Chloe Park"
          role="Design ops, Northwave"
        />
      </Testimonials>
      <Footer>
        <FooterPanel>
          <FooterMain>
            <FooterBrand
              name="Canopy"
              logo={
                <span className="flex size-9 items-center justify-center rounded-full bg-violet-500/15 text-body font-semibold text-violet-600 dark:text-violet-400">
                  A
                </span>
              }
            >
              Motion-first sites without the handoff queue.
            </FooterBrand>
          </FooterMain>
          <FooterDivider />
          <FooterBar>
            <FooterCopyright name="Canopy" />
            <FooterLegal
              links={[
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
              ]}
            />
          </FooterBar>
        </FooterPanel>
      </Footer>
    </LandingFullBleed>
  )
}
