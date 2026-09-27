import { HomeHero } from "@/components/home/home-hero";
import Image from "next/image";
import { TechnologyVisual } from "@/components/home/technology-visual";
import { CtaSection } from "@/components/layout/cta-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProcessTimeline } from "@/components/process/process-timeline";
import { ServiceIcon } from "@/components/services/service-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { LinkArrow } from "@/components/ui/link-arrow";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";
import { getPublishedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Amanda Vertex Inc. | AI Chatbots & Custom Software | Calgary",
  description:
    "Calgary-based Amanda Vertex Inc. develops AI chatbots, software integrations, workflow automation, custom CRM systems and mobile applications.",
  path: "/",
});

const homeServices = services.filter((s) =>
  ["ai-chatbots", "ai-integration", "crm-development", "mobile-apps"].includes(
    s.slug,
  ),
);

export default function HomePage() {
  const published = getPublishedProjects();

  return (
    <>
      <HomeHero />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <MotionReveal>
            <SectionHeading
              title="Technology That Fits the Business Behind It"
              description="From customer conversations to complex internal workflows, the best digital systems align with how your business actually operates."
              className="max-w-xl"
            />
            <p className="mt-6 text-muted-foreground">
              Amanda Vertex Inc. designs and develops practical digital solutions
              tailored to operational needs, with a focus on thoughtful
              integration, usability and long-term scalability.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface-elevated p-3 shadow-[0_24px_60px_rgba(2,6,23,0.25)]">
              <div className="relative h-[420px] overflow-hidden rounded-[1.2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Business team reviewing a software workflow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="border-y border-border bg-surface/40 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Build"
            title="Technology Designed Around Your Operations"
            align="center"
            className="mb-12"
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {homeServices.map((service, index) => (
              <MotionReveal key={service.slug} delay={index * 0.05}>
                <Card as="li" className="h-full list-none">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-semibold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <div className="mt-5">
                    <LinkArrow href={service.href}>
                      {service.slug === "ai-chatbots" && "Explore AI Chatbots"}
                      {service.slug === "ai-integration" &&
                        "Explore AI Integration"}
                      {service.slug === "crm-development" &&
                        "Explore CRM Development"}
                      {service.slug === "mobile-apps" &&
                        "Explore Application Development"}
                    </LinkArrow>
                  </div>
                </Card>
              </MotionReveal>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Connect the Systems That Power Your Business
            </h2>
            <p className="mt-4 text-muted-foreground">
              Projects may connect websites, CRMs, APIs, internal tools, data
              sources, AI services and business workflows—planned around your
              security and access requirements.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <TechnologyVisual variant="flow" />
          </MotionReveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/30 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Practical Solutions for Real Business Workflows"
            align="center"
            className="mb-12"
          />
          <div className="relative mb-10 aspect-[16/7] overflow-hidden rounded-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85"
              alt="Business team planning a digital workflow"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <MotionReveal key={item.slug} delay={index * 0.04}>
                <Card as="li" className="flex h-full list-none flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">
                    {item.label}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </MotionReveal>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            These illustrations describe possible approaches—not delivered client
            projects unless published in Our Work.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <MotionReveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Led With Practical Technology in Mind
            </h2>
            <p className="mt-4 text-muted-foreground">
              Amanda Vertex Inc. approaches technology engagements by
              understanding the client&apos;s workflow, defining practical project
              requirements and developing solutions appropriate to the client&apos;s
              systems and goals.
            </p>
            <p className="mt-6 font-medium text-foreground">
              {company.founderName}
            </p>
            <p className="text-sm text-muted-foreground">{company.founderTitle}</p>
            <div className="mt-6">
              <Button href="/about#founder" variant="secondary">
                Meet the Founder
              </Button>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="border-y border-border bg-surface/40 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Case-Study Templates"
            description="Preview the Client A anonymized case-study template. Project details remain pending verification and client approval."
            className="mb-10"
          />
          {published.length > 0 ? (
            <ul className="grid gap-6 md:grid-cols-2">
              {published.slice(0, 1).map((project) => (
                <li key={project.slug} className="list-none">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <Card className="max-w-2xl">
              <h3 className="text-lg font-semibold text-foreground">
                Verified case studies
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Approved project write-ups will be published here when available.
                We do not display unverified client work on this site.
              </p>
            </Card>
          )}
          <div className="mt-8">
            <LinkArrow href="/our-work">View Our Work</LinkArrow>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="From Business Problem to Working Solution"
            className="mb-10"
          />
          <ProcessTimeline />
          <div className="mt-10">
            <LinkArrow href="/process">See Our Process</LinkArrow>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Have a Business Challenge in Mind?"
        description="Tell us what you are trying to improve, connect or build. We'll discuss your requirements and possible next steps."
      />
    </>
  );
}
