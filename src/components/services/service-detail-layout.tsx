import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/layout/cta-section";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import type { Service } from "@/types";

type ServiceSection = {
  title: string;
  body: string | string[];
};

type ServiceDetailLayoutProps = {
  service: Service;
  sections: ServiceSection[];
  ctaLabel?: string;
};

export function ServiceDetailLayout({
  service,
  sections,
  ctaLabel = "Discuss Your Project",
}: ServiceDetailLayoutProps) {
  const visualVariant = {
    "ai-chatbots": "chatbots",
    "ai-integration": "integration",
    "crm-development": "crm",
    "mobile-apps": "apps",
    "ongoing-support": "support",
  }[service.slug] as "chatbots" | "integration" | "crm" | "apps" | "support";

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.description}
        path={service.href}
      />
      <PageHero
        eyebrow={`${service.number} / ${service.title}`}
        title={service.title}
        description={service.description}
        imageSrc={service.heroImage.src}
        imageAlt={service.heroImage.alt}
        visualVariant={visualVariant}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg">{ctaLabel}</Button>
          <Button href="/services" variant="secondary" size="lg">All services</Button>
        </div>
      </PageHero>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((section, index) => (
              <MotionReveal key={section.title} delay={index * 0.035}>
                <article className="group h-full rounded-[1.35rem] border border-border/80 bg-[linear-gradient(145deg,rgba(16,36,49,0.82),rgba(10,26,36,0.74))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_22px_50px_rgba(0,0,0,0.2)] sm:p-7">
                  <span className="inline-flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] font-mono text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                    {Array.isArray(section.body) ? (
                      section.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)
                    ) : (
                      <p>{section.body}</p>
                    )}
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
          {service.features.length > 0 ? (
            <MotionReveal className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Possible capabilities
              </h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-border/75 bg-surface/60 px-4 py-4 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Capabilities depend on project requirements and are scoped during
                discovery—not every item applies to every engagement.
              </p>
            </MotionReveal>
          ) : null}
        </Container>
      </section>
      <CtaSection
        title="Ready to scope your project?"
        description="Share your systems, users and goals—we'll discuss fit and possible next steps."
        primaryLabel={ctaLabel}
      />
    </>
  );
}
