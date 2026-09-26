import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/layout/cta-section";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/solutions";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Business Technology Solutions | Manda Vertex Inc.",
  description:
    "Example technology solutions for customer service, booking, sales follow-up, internal knowledge and customer portals.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="POSSIBLE / PRACTICAL / CONNECTED"
        title="Technology Solutions for Real Operational Challenges"
        description="Illustrative use cases showing how AI, integration and custom software can support common workflows. These are not presented as completed client projects unless published in Our Work."
        imageSrc="https://images.pexels.com/photos/15096572/pexels-photo-15096572.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Professionals reviewing charts during a business presentation"
        visualVariant="solutions"
      >
        <Button href="/contact" size="lg">Explore a use case</Button>
      </PageHero>
      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=85"
              alt="Customer service professional using digital tools"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
          {solutions.map((item, index) => {
            const related = getServiceBySlug(item.relatedServiceSlug);
            return (
              <MotionReveal key={item.slug} delay={index * 0.04}>
                <Card as="article">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {item.label}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 max-w-3xl text-muted-foreground">
                    {item.description}
                  </p>
                  {related ? (
                    <Link
                      href={related.href}
                      className="mt-4 inline-flex text-sm font-medium text-primary hover:text-accent"
                    >
                      Related service: {related.title}
                    </Link>
                  ) : null}
                </Card>
              </MotionReveal>
            );
          })}
        </Container>
      </section>
      <CtaSection
        title="Discuss a use case for your organization"
        description="Tell us about your workflow—we can explore whether a similar approach fits your systems and goals."
      />
    </>
  );
}
