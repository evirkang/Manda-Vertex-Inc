import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/layout/cta-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getPublishedProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Work | Amanda Vertex Inc.",
  description:
    "Anonymized Client A and Client B case-study templates awaiting verified facts and client approval.",
  path: "/our-work",
});

export default function OurWorkPage() {
  const published = getPublishedProjects();

  return (
    <>
      <PageHero
        eyebrow="SELECTED WORK / CASE STUDIES"
        title="Technology Projects Built Around Business Requirements"
        description="Client A and Client B are anonymized case-study templates. Project facts will be published only after verification and client approval."
        imageSrc="https://images.pexels.com/photos/7433847/pexels-photo-7433847.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Business professionals collaborating at a conference table"
        imageCaption="Illustrative stock photo, not evidence of client work."
        visualVariant="work"
      >
        <Button href="/contact" size="lg">Discuss a project</Button>
      </PageHero>
      <section className="py-16 sm:py-20">
        <Container>
          {published.length > 0 ? (
            <ul className="grid gap-6 md:grid-cols-2">
              {published.map((project) => (
                <li key={project.slug} className="list-none">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <Card className="max-w-2xl">
              <h2 className="text-xl font-semibold text-foreground">
                Case studies
              </h2>
              <p className="mt-3 text-muted-foreground">
                Approved project summaries are published only with client permission and verified scope. Confidential or unverified work is not displayed on this website.
              </p>
            </Card>
          )}
        </Container>
      </section>
      <CtaSection
        title="Planning a project?"
        description="Share your requirements—we can discuss scope, integrations and delivery approach."
      />
    </>
  );
}
