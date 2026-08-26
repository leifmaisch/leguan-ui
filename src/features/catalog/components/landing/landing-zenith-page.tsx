"use client"

import { Button } from "@/components/ui/button"
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
  HeroLabel,
  HeroShowcase,
  HeroTitle,
} from "@/components/ui/hero"
import { Input } from "@/components/ui/input"
import { Section, SectionDescription, SectionHeader, SectionTitle } from "@/components/ui/section"
import { TestimonialCard, Testimonials } from "@/components/ui/testimonials"
import {
  BlogStyleCard,
} from "@/features/catalog/previews/cards-preview"
import { LandingFullBleed } from "./landing-full-bleed"
import { QuillNavbar } from "./landing-navbars"
import { LandingZenithBento } from "./sections/landing-zenith-bento"

export function LandingZenithPage() {
  return (
    <LandingFullBleed>
      <QuillNavbar sticky />
      <Hero className="py-10 sm:py-14">
        <HeroFrame className="lg:flex-row lg:items-stretch">
          <HeroIntro className="items-start text-left lg:flex-1 lg:py-12 lg:pl-8 lg:pr-4">
            <HeroLabel>
              <span className="text-label font-medium text-rose-600 dark:text-rose-400">
                Independent publishing
              </span>
            </HeroLabel>
            <HeroTitle className="max-w-xl text-left text-3xl sm:text-4xl md:text-5xl">
              Stories worth reading, not skimming
            </HeroTitle>
            <HeroDescription className="max-w-md text-left">
              Inspired by reader-first publishing platforms. Quill gives writers
              a calm canvas, thoughtful typography, and subscriptions without
              algorithmic noise.
            </HeroDescription>
            <HeroActions className="justify-start">
              <Button size="lg" shape="pill">
                Start writing
              </Button>
              <Button size="lg" shape="pill" variant="outline">
                Read featured
              </Button>
            </HeroActions>
          </HeroIntro>
          <HeroShowcase className="lg:m-1 lg:min-h-0 lg:flex-1 lg:self-stretch">
            <div className="p-4 sm:p-5">
              <BlogStyleCard featured compact />
            </div>
          </HeroShowcase>
        </HeroFrame>
      </Hero>
      <Section className="py-0">
        <SectionHeader className="items-start text-left">
          <SectionTitle className="text-left">Featured this week</SectionTitle>
          <SectionDescription className="text-left">
            Long-form essays and field notes from the Quill writer network.
          </SectionDescription>
        </SectionHeader>
        <div className="grid auto-rows-min items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="min-w-0 h-full sm:col-span-2 lg:row-span-2 [&>*]:h-full">
            <BlogStyleCard featured />
          </div>
          <div className="min-w-0 h-full [&>*]:h-full">
            <BlogStyleCard />
          </div>
          <div className="min-w-0 h-full [&>*]:h-full">
            <BlogStyleCard compact />
          </div>
        </div>
      </Section>
      <LandingZenithBento />
      <Testimonials
        title="Readers and writers"
        description="People who chose depth over dopamine."
      >
        <TestimonialCard
          featured
          quote="Quill feels like a Sunday newspaper on my phone. I finish articles instead of bouncing after two paragraphs."
          name="Isabelle Grant"
          role="Subscriber, Portland"
        />
        <TestimonialCard
          quote="My essays finally look how they read. Typography and spacing do the heavy lifting."
          name="Theo Walsh"
          role="Essayist"
        />
        <TestimonialCard
          quote="Subscriptions cover my hosting and a part-time editor. No ad network, no guilt."
          name="Nadia El-Sayed"
          role="Independent journalist"
        />
      </Testimonials>
      <Cta className="mx-auto max-w-5xl">
        <CtaTitle>Get one great story per week</CtaTitle>
        <CtaDescription>
          Free readers get the Friday digest. Members unlock every essay, offline
          reading, and the comments section.
        </CtaDescription>
        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Input placeholder="Email address" type="email" className="h-11" />
          <Button size="lg" shape="pill" className="shrink-0">
            Subscribe
          </Button>
        </div>
        <CtaActions className="mt-4">
          <Button size="lg" shape="pill" variant="outline">
            Become a member
          </Button>
        </CtaActions>
      </Cta>
      <Footer>
        <FooterPanel>
          <FooterBar>
            <FooterCopyright name="Quill" />
            <FooterLegal
              links={[
                { label: "Privacy", href: "#" },
                { label: "Writer guidelines", href: "#" },
              ]}
            />
          </FooterBar>
        </FooterPanel>
      </Footer>
    </LandingFullBleed>
  )
}
