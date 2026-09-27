import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { company, getLocationLine } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Amanda Vertex Inc. | Calgary",
  description:
    "Contact Amanda Vertex Inc. to discuss AI chatbots, integrations, CRM development and custom applications.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CALGARY · WORKING ACROSS CANADA"
        title="Let's Discuss Your Next Technology Project"
        description="Tell us about your business, the systems you use and the challenge you want to solve. We'll review your inquiry and discuss possible next steps."
        imageSrc="https://images.pexels.com/photos/12902865/pexels-photo-12902865.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Two colleagues reviewing work together on a laptop"
        visualVariant="contact"
      >
        <Button href="#inquiry" size="lg">Tell us what you’re building</Button>
      </PageHero>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Get in touch
            </h2>
            <p className="mt-3 text-muted-foreground">
              Share enough context for us to prepare for a useful first
              conversation—your industry, current tools and what you want to
              improve.
            </p>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                alt="Bright professional workspace for a project discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-6 font-medium text-foreground">
              {getLocationLine()}
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {company.email ? (
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-primary hover:text-accent"
                  >
                    info@amandavertexinc.com
                  </a>
                </li>
              ) : null}
              {company.phone ? (
                <li>
                  Phone:{" "}
                  <a
                    href={`tel:${company.phone}`}
                    className="text-primary hover:text-accent"
                  >
                    {company.phone}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          <Card id="inquiry" className="scroll-mt-28">
            <ContactForm />
          </Card>
        </Container>
      </section>
    </>
  );
}
