import { Button } from "@/components/ui/button"
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

export function PricingPreview() {
  return (
    <Pricing
      title="Simple pricing, no surprises"
      description="Start free. Scale when you need more."
    >
      <PricingCard>
        <PricingHeader>
          <PricingName>Free</PricingName>
          <PricingDescription>For personal projects and experiments.</PricingDescription>
        </PricingHeader>
        <PricingAmount>
          <PricingPrice>$0</PricingPrice>
          <PricingPeriod>/ month</PricingPeriod>
        </PricingAmount>
        <PricingFeatures>
          <PricingFeature>All core components</PricingFeature>
          <PricingFeature>Registry install</PricingFeature>
          <PricingFeature included={false}>Priority support</PricingFeature>
        </PricingFeatures>
        <PricingAction>
          <Button className="w-full" shape="squircle" variant="outline">
            Get started
          </Button>
        </PricingAction>
      </PricingCard>
      <PricingCard featured>
        <PricingHeader>
          <PricingName>Pro</PricingName>
          <PricingDescription>For teams shipping production apps.</PricingDescription>
        </PricingHeader>
        <PricingAmount>
          <PricingPrice>$29</PricingPrice>
          <PricingPeriod>/ month</PricingPeriod>
        </PricingAmount>
        <PricingFeatures>
          <PricingFeature>Everything in Free</PricingFeature>
          <PricingFeature>Chart primitives</PricingFeature>
          <PricingFeature>Website sections</PricingFeature>
          <PricingFeature>Priority support</PricingFeature>
        </PricingFeatures>
        <PricingAction>
          <Button className="w-full" shape="squircle">
            Start trial
          </Button>
        </PricingAction>
      </PricingCard>
      <PricingCard>
        <PricingHeader>
          <PricingName>Team</PricingName>
          <PricingDescription>For larger teams with custom needs.</PricingDescription>
        </PricingHeader>
        <PricingAmount>
          <PricingPrice>$99</PricingPrice>
          <PricingPeriod>/ month</PricingPeriod>
        </PricingAmount>
        <PricingFeatures>
          <PricingFeature>Everything in Pro</PricingFeature>
          <PricingFeature>Unlimited projects</PricingFeature>
          <PricingFeature>Custom themes</PricingFeature>
          <PricingFeature>Dedicated support</PricingFeature>
        </PricingFeatures>
        <PricingAction>
          <Button className="w-full" shape="squircle" variant="outline">
            Contact sales
          </Button>
        </PricingAction>
      </PricingCard>
    </Pricing>
  )
}
