"use client"

import {
  Area,
  AreaChart,
  Sparkline,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/dither-kit"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Code } from "@/components/ui/code"
import {
  Cta,
  CtaActions,
  CtaDescription,
  CtaTitle,
} from "@/components/ui/cta"
import {
  Footer,
  FooterBar,
  FooterCopyright,
  FooterLegal,
  FooterPanel,
} from "@/components/ui/footer"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroFrame,
  HeroIntro,
  HeroShowcase,
  HeroTitle,
} from "@/components/ui/hero"
import { Input } from "@/components/ui/input"
import { Section, SectionDescription, SectionHeader, SectionTitle } from "@/components/ui/section"
import { StatCard } from "@/components/ui/stat-card"
import { ChartFrame } from "@/features/catalog/charts/chart-frame"
import {
  monthlyConfig,
  monthlyData,
  sparklineData,
} from "@/features/catalog/charts/sample-data"
import { InfoIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { LandingFullBleed } from "./landing-full-bleed"
import { RidgeNavbar } from "./landing-navbars"
import { LandingNebulaBento } from "./sections/landing-nebula-bento"
import { LandingNebulaBranding } from "./sections/landing-nebula-branding"

const trackingScript = `<script defer
  data-domain="yourdomain.com"
  src="https://ridge.dev/script.js">
</script>`

export function LandingNebulaPage() {
  return (
    <LandingFullBleed>
      <RidgeNavbar sticky />
      <Hero className="py-10 sm:py-14">
        <HeroFrame>
          <HeroIntro className="gap-5">
            <HeroTitle>Privacy-first analytics for indie makers</HeroTitle>
            <HeroDescription>
              Inspired by lightweight analytics tools. No cookies, no consent
              banners, no dark patterns. Ridge tracks visits with hashed IDs
              and exports you can trust.
            </HeroDescription>
            <HeroActions>
              <Button size="lg" shape="pill">
                Start free trial
              </Button>
              <Button size="lg" shape="pill" variant="outline">
                View live demo
              </Button>
            </HeroActions>
          </HeroIntro>
          <HeroShowcase>
            <div className="flex h-full flex-col gap-4 p-4 sm:p-5">
              <p className="text-label">Visitors this week</p>
              <ChartFrame height="md">
                <AreaChart data={monthlyData} config={monthlyConfig} bloom="aura">
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip labelKey="month" />
                  <Area dataKey="desktop" variant="gradient" />
                  <Area dataKey="mobile" variant="hatched" />
                </AreaChart>
              </ChartFrame>
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Pageviews" value="84.2k" change="+18%" positive />
                <StatCard label="Bounce rate" value="32%" change="-4.1%" positive />
              </div>
            </div>
          </HeroShowcase>
        </HeroFrame>
      </Hero>
      <LandingNebulaBranding />
      <LandingNebulaBento />
      <Section className="py-0">
        <SectionHeader className="items-start text-left">
          <SectionTitle className="text-left">Trend snapshots</SectionTitle>
          <SectionDescription className="text-left">
            Sparklines surface movement without opening a full dashboard.
          </SectionDescription>
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-squircle-lg border border-border/60 bg-muted/20 px-4 py-3">
            <Sparkline
              data={sparklineData}
              color="primary"
              bloom="aura"
              className="h-10 w-32"
            />
            <div className="min-w-0">
              <p className="text-body font-medium">Weekly signups</p>
              <p className="text-caption text-muted-foreground">+24% vs last week</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-squircle-lg border border-border/60 bg-muted/20 px-4 py-3">
            <Sparkline
              data={sparklineData}
              color="negative"
              variant="hatched"
              className="h-10 w-32"
            />
            <div className="min-w-0">
              <p className="text-body font-medium">Referral traffic</p>
              <p className="text-caption text-muted-foreground">+9% vs last week</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-squircle-lg border border-border/60 bg-muted/20 px-4 py-3">
            <Sparkline
              data={sparklineData}
              color="primary"
              variant="solid"
              className="h-10 w-32"
            />
            <div className="min-w-0">
              <p className="text-body font-medium">Returning users</p>
              <p className="text-caption text-muted-foreground">+12% vs last week</p>
            </div>
          </div>
        </div>
      </Section>
      <Section className="py-0">
        <SectionHeader className="items-start text-left">
          <SectionTitle className="text-left">Install in one line</SectionTitle>
          <SectionDescription className="text-left">
            Drop the Ridge script on your site and data appears in seconds.
          </SectionDescription>
        </SectionHeader>
        <Code code={trackingScript} language="tsx" filename="index.html" />
        <Alert className="mt-4">
          <InfoIcon weight={iconWeight} />
          <AlertTitle>No cookies required</AlertTitle>
          <AlertDescription>
            Ridge respects DNT headers and never stores personal identifiers in
            the browser.
          </AlertDescription>
        </Alert>
      </Section>
      <Cta className="border-primary/20 bg-primary/5">
        <CtaTitle>Try Ridge on your site today</CtaTitle>
        <CtaDescription>
          Free for one site. Upgrade when you need more properties or team seats.
        </CtaDescription>
        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Input placeholder="you@company.com" type="email" className="h-11" />
          <Button size="lg" shape="pill" className="shrink-0">
            Get started
          </Button>
        </div>
      </Cta>
      <Footer>
        <FooterPanel>
          <FooterBar>
            <FooterCopyright name="Ridge" />
            <FooterLegal
              links={[
                { label: "Privacy", href: "#" },
                { label: "Data policy", href: "#" },
              ]}
            />
          </FooterBar>
        </FooterPanel>
      </Footer>
    </LandingFullBleed>
  )
}
