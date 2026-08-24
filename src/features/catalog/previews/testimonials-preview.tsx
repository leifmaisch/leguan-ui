import { TestimonialCard, Testimonials } from "@/components/ui/testimonials"

export function TestimonialsPreview() {
  return (
    <Testimonials
      title="Teams that ship faster"
      description="See how builders use Leguan to launch polished UI without slowing down."
    >
      <TestimonialCard
        featured
        quote="We replaced a week of layout work with one afternoon of shadcn installs. The squircle tokens just work."
        name="Maya Chen"
        role="Design lead, Northline"
      />
      <TestimonialCard
        quote="The chart primitives look incredible out of the box. Our dashboard finally feels intentional."
        name="Jonas Park"
        role="Founder, Metricly"
      />
      <TestimonialCard
        quote="AGENTS.md made it easy for our team to pull the right components into new features."
        name="Elena Ruiz"
        role="Staff engineer, Relay"
      />
    </Testimonials>
  )
}
