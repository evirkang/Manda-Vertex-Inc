import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/layout/cta-section";
import Image from "next/image";
import { ProcessTimeline } from "@/components/process/process-timeline";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Technology Development Process | Manda Vertex",
  description:
    "Discovery, planning, design, development, testing and launch—how Manda Vertex Inc. delivers technology projects.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="A CLEAR PATH FROM IDEA TO DELIVERY"
        title="From Discovery to Launch"
        description="Every engagement begins with understanding the business problem, existing systems and project goals."
        imageSrc="https://images.pexels.com/photos/7581110/pexels-photo-7581110.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Team discussing plans together in a conference room"
        visualVariant="process"
      >
        <Button href="/contact" size="lg">Start with discovery</Button>
      </PageHero>
      <section className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="relative mb-10 aspect-[16/7] overflow-hidden rounded-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=85"
              alt="Business team collaborating during project planning"
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
            />
          </div>
          <ProcessTimeline detailed />
        </Container>
      </section>
      <CtaSection
        title="Ready to start with discovery?"
        description="Book a conversation to walk through your challenge, systems and timeline."
      />
    </>
  );
}
