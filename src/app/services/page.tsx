import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/layout/cta-section";
import Image from "next/image";
import { ServiceIcon } from "@/components/services/service-icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI, Software Integration & Custom Development Services | Manda Vertex",
  description:
    "Services from Manda Vertex Inc.: AI chatbots, software integration, custom CRM, mobile and web applications, and ongoing support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES / 01—05"
        title="Technology Services Built Around Your Business"
        description="From conversational AI to custom software, Manda Vertex Inc. develops digital solutions around operational needs, existing systems and project goals."
        imageSrc="https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Computer workstations in a software development workspace"
        visualVariant="services"
      >
        <Button href="/contact" size="lg">Discuss your project</Button>
      </PageHero>
      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=85"
              alt="Digital product development and software integration"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
          {services.map((service, index) => (
            <MotionReveal key={service.slug} delay={index * 0.03}>
              <article
                id={service.slug}
                className="grid gap-8 border-b border-border pb-16 last:border-0 lg:grid-cols-[auto_1fr]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-semibold text-primary">
                    {service.number}
                  </span>
                  <ServiceIcon name={service.icon} className="size-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground before:mr-2 before:text-primary before:content-['•']"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href={service.href} variant="secondary">
                      Learn More
                    </Button>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </Container>
      </section>
      <CtaSection
        title="Not sure which service fits?"
        description="Describe your challenge on our contact page—we'll help map it to the right starting point."
      />
    </>
  );
}
