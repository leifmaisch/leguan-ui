"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  FooterColumn,
  FooterColumns,
  FooterCopyright,
  FooterDivider,
  FooterLegal,
  FooterLink,
  FooterMain,
  FooterPanel,
} from "@/components/ui/footer"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroIntro,
  HeroTitle,
} from "@/components/ui/hero"
import {
  Pricing,
  PricingAction,
  PricingAmount,
  PricingCard,
  PricingDescription,
  PricingFeature,
  PricingFeatures,
  PricingHeader,
  PricingName,
  PricingPeriod,
  PricingPrice,
} from "@/components/ui/pricing"
import { Section } from "@/components/ui/section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestimonialCard, Testimonials } from "@/components/ui/testimonials"
import { LandingFullBleed } from "./landing-full-bleed"
import { CopalNavbar } from "./landing-navbars"
import { LandingSolsticeBento } from "./sections/landing-solstice-bento"
import { LandingSolsticeBranding } from "./sections/landing-solstice-branding"

const apiExample = `curl https://api.copal.dev/v2/payments \\
  -H "Authorization: Bearer sk_live_..." \\
  -d amount=2900 \\
  -d currency=usd \\
  -d customer=cus_8f2k9x`

const webhookExample = `{
  "event": "payment.succeeded",
  "amount": 2900,
  "currency": "usd",
  "customer": "cus_8f2k9x"
}`

export function LandingSolsticePage() {
  return (
    <LandingFullBleed>
      <CopalNavbar sticky />
      <Hero className="py-10 sm:py-14">
        <HeroIntro className="gap-5 pb-8 sm:pb-10">
          <HeroTitle>Financial infrastructure for developers</HeroTitle>
          <HeroDescription className="max-w-2xl">
            Inspired by developer-first payment platforms. Copal gives you
            REST endpoints, webhook events, and typed SDKs so you ship billing
            without negotiating with banks.
          </HeroDescription>
          <HeroActions>
            <Button size="lg" shape="squircle">
              Get API keys
            </Button>
            <Button size="lg" shape="squircle" variant="outline">
              Read the docs
            </Button>
          </HeroActions>
        </HeroIntro>
      </Hero>
      <LandingSolsticeBranding />
      <Section className="py-0 pb-10 md:pb-14">
        <Code code={apiExample} language="bash" filename="Terminal" />
      </Section>
      <Section className="py-0">
        <Tabs defaultValue="rest">
          <TabsList>
            <TabsTrigger value="rest">REST API</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="sdks">SDKs</TabsTrigger>
          </TabsList>
          <TabsContent value="rest" className="mt-6 space-y-4">
            <p className="text-description max-w-2xl">
              Idempotent payment endpoints with sandbox keys, rate-limit headers,
              and structured error codes your CI can parse.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-squircle-md border bg-muted/30 p-4">
                <p className="text-label">Latency p99</p>
                <p className="mt-1 text-heading text-xl">42ms</p>
              </div>
              <div className="rounded-squircle-md border bg-muted/30 p-4">
                <p className="text-label">Uptime</p>
                <p className="mt-1 text-heading text-xl">99.99%</p>
              </div>
              <div className="rounded-squircle-md border bg-muted/30 p-4">
                <p className="text-label">Regions</p>
                <p className="mt-1 text-heading text-xl">12</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="webhooks" className="mt-6 space-y-4">
            <p className="text-description max-w-2xl">
              Signed webhook payloads with retry policies and a replay console
              when your staging environment misses an event.
            </p>
            <Code code={webhookExample} language="json" filename="payment.succeeded.json" />
          </TabsContent>
          <TabsContent value="sdks" className="mt-6 space-y-4">
            <p className="text-description max-w-2xl">
              Official clients for TypeScript, Python, and Go. Same object shapes
              in every language, generated from the OpenAPI spec.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Go</Badge>
              <Badge variant="secondary">Ruby</Badge>
              <Badge variant="secondary">Java</Badge>
            </div>
          </TabsContent>
        </Tabs>
      </Section>
      <LandingSolsticeBento />
      <Pricing
        title="Usage-based pricing"
        description="Pay per successful API call. No setup fees on the builder tier."
      >
        <PricingCard>
          <PricingHeader>
            <PricingName>Builder</PricingName>
            <PricingDescription>For side projects and staging environments.</PricingDescription>
          </PricingHeader>
          <PricingAmount>
            <PricingPrice>$0</PricingPrice>
            <PricingPeriod>/ month + usage</PricingPeriod>
          </PricingAmount>
          <PricingFeatures>
            <PricingFeature>10k API calls included</PricingFeature>
            <PricingFeature>Sandbox keys</PricingFeature>
            <PricingFeature included={false}>Dedicated support</PricingFeature>
          </PricingFeatures>
          <PricingAction>
            <Button className="w-full" shape="squircle" variant="outline">
              Start building
            </Button>
          </PricingAction>
        </PricingCard>
        <PricingCard featured>
          <PricingHeader>
            <PricingName>Growth</PricingName>
            <PricingDescription>For production apps with real volume.</PricingDescription>
          </PricingHeader>
          <PricingAmount>
            <PricingPrice>$99</PricingPrice>
            <PricingPeriod>/ month + usage</PricingPeriod>
          </PricingAmount>
          <PricingFeatures>
            <PricingFeature>1M API calls included</PricingFeature>
            <PricingFeature>Webhook replay</PricingFeature>
            <PricingFeature>Priority routing</PricingFeature>
            <PricingFeature>Slack support</PricingFeature>
          </PricingFeatures>
          <PricingAction>
            <Button className="w-full" shape="squircle">
              Activate Growth
            </Button>
          </PricingAction>
        </PricingCard>
        <PricingCard>
          <PricingHeader>
            <PricingName>Enterprise</PricingName>
            <PricingDescription>Custom contracts and compliance reviews.</PricingDescription>
          </PricingHeader>
          <PricingAmount>
            <PricingPrice>Custom</PricingPrice>
          </PricingAmount>
          <PricingFeatures>
            <PricingFeature>Dedicated cluster</PricingFeature>
            <PricingFeature>SSO and audit logs</PricingFeature>
            <PricingFeature>Custom SLAs</PricingFeature>
            <PricingFeature>Solution engineer</PricingFeature>
          </PricingFeatures>
          <PricingAction>
            <Button className="w-full" shape="squircle" variant="outline">
              Contact sales
            </Button>
          </PricingAction>
        </PricingCard>
      </Pricing>
      <Testimonials
        title="Trusted by platform teams"
        description="Engineers who replaced legacy billing with Copal."
      >
        <TestimonialCard
          featured
          quote="We migrated off a legacy gateway in two sprints. The webhook replay tool alone saved our on-call rotation."
          name="Alex Rivera"
          role="Staff engineer, Parcel"
        />
        <TestimonialCard
          quote="Sandbox keys mirror production behavior. Our integration tests finally catch real edge cases."
          name="Kim Okada"
          role="Platform lead, Harbor"
        />
        <TestimonialCard
          quote="The TypeScript SDK types match the docs exactly. No more guessing field names at 2 a.m."
          name="Omar Haddad"
          role="CTO, Latch"
        />
      </Testimonials>
      <Cta>
        <CtaTitle>Ship billing this week</CtaTitle>
        <CtaDescription>
          Create a sandbox account, run the curl example above, and watch the
          webhook land in your dashboard.
        </CtaDescription>
        <CtaActions>
          <Button size="lg" shape="pill">
            Create sandbox
          </Button>
          <Button size="lg" shape="pill" variant="outline">
            View API reference
          </Button>
        </CtaActions>
      </Cta>
      <Footer>
        <FooterPanel>
          <FooterMain>
            <FooterColumns>
              <FooterColumn title="Developers">
                <FooterLink label="API reference" href="#" />
                <FooterLink label="SDKs" href="#" />
                <FooterLink label="Status" href="#" />
              </FooterColumn>
              <FooterColumn title="Company">
                <FooterLink label="About" href="#" />
                <FooterLink label="Security" href="#" />
                <FooterLink label="Compliance" href="#" />
              </FooterColumn>
            </FooterColumns>
          </FooterMain>
          <FooterDivider />
          <FooterBar>
            <FooterCopyright name="Copal" />
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
