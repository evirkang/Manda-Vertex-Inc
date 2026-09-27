import { CtaSection } from "@/components/layout/cta-section";
import { PageHero } from "@/components/layout/page-hero";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, getLocationLine } from "@/data/company";
import { deliveryApproachSteps, principles } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Amanda Vertex Inc. | Calgary Technology Company",
  description:
    "Learn about Amanda Vertex Inc., a Calgary technology company focused on AI chatbots, integrations, CRM development and digital products.",
  path: "/about",
});

const focusAreas = [
  "Conversational AI",
  "Business Application Integration",
  "Workflow Automation",
  "CRM Development",
  "Digital Product Engineering",
];

export default function AboutPage() {
  const aboutLead = company.showFederallyIncorporated
    ? "Amanda Vertex Inc. is a Calgary-based, federally incorporated technology startup focused on advanced AI-powered solutions and custom software development."
    : "Amanda Vertex Inc. is a Calgary-based technology company focused on advanced AI-powered solutions and custom software development.";

  return (
    <>
      <PageHero
        eyebrow="ABOUT AmANDA VERTEX"
        title="Technology Built Around Practical Business Needs"
        description={aboutLead}
        imageSrc="https://images.pexels.com/photos/15099677/pexels-photo-15099677.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Sikh Indian professional in a suit, shown as a representative stock portrait"
        visualVariant="about"
        imageCaption={
          <>
            Representative stock portrait, not the founder. Photo by{" "}
            <a
              href="https://www.pexels.com/@worldsikhorg/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              World Sikh Organization of Canada
            </a>{" "}
            via Pexels.
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Building Technology Around the Way Businesses Actually Work" />
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
            <p>
              Amanda Vertex Inc. brings together conversational AI, business
              application integration, workflow automation, CRM development and
              digital product engineering.
            </p>
            <p>
              Led by founder {company.founderName}, the company aims to help
              businesses adopt technology that addresses practical operational
              challenges.
            </p>
            <p>
              We approach each engagement by understanding the client&apos;s
              workflow, defining measurable project requirements and developing
              solutions appropriate to the client&apos;s systems and goals.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface/40 py-16 sm:py-20">
        <Container>
          <SectionHeading title="What We Focus On" className="mb-8" />
          <figure className="mb-8 overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-[16/7]">
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=85"
                alt="Software developer working at a computer"
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </figure>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <li key={area} className="list-none">
                <Card>{area}</Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Based in Calgary, Built for Modern Businesses" />
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Amanda Vertex Inc. operates from {getLocationLine()} and works with
            organizations seeking practical technology solutions.
          </p>
        </Container>
      </section>

      <section
        id="founder"
        className="border-y border-border bg-surface/30 py-16 sm:py-20 scroll-mt-24"
      >
        <Container className="max-w-4xl">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Meet {company.founderName}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {company.founderTitle}, {company.displayName}
            </p>
            <p className="mt-4 text-muted-foreground">
              {company.displayName} focuses on practical requirements, clear
              scope and technology that supports day-to-day operations. Founder
              qualifications and public profile details will be published only
              after verification against approved records.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Delivery Approach" className="mb-8" />
          <ol className="max-w-2xl space-y-3">
            {deliveryApproachSteps.map((step) => (
              <li
                key={step}
                className="flex gap-3 text-muted-foreground"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {step}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/40 py-16 sm:py-20">
        <Container>
          <SectionHeading title="Principles" className="mb-8" />
          <ul className="grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <Card as="li" className="list-none">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </MotionReveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection
        title="Let's Discuss Your Technology Project"
        description="Share your goals and systems—we'll outline how we can help and what discovery would cover."
        primaryLabel="Book a Discovery Call"
      />
    </>
  );
}
