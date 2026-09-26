import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { getPublishedProjectBySlug, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getPublishedProjectBySlug(slug);
  if (!project) {
    return createPageMetadata({
      title: "Case Study | Manda Vertex Inc.",
      description: "Anonymized case-study template from Manda Vertex Inc.",
      path: `/our-work/${slug}`,
    });
  }
  return createPageMetadata({
    title: `${project.title} | Our Work | Manda Vertex Inc.`,
    description:
      project.challenge?.slice(0, 155) ??
      "An anonymized case-study template awaiting verified project facts and client approval.",
    path: `/our-work/${slug}`,
  });
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  if (!children) return null;
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPublishedProjectBySlug(slug);
  if (!project) notFound();

  const relatedServices =
    project.relatedServiceSlugs
      ?.map((s) => getServiceBySlug(s))
      .filter(Boolean) ?? [];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/our-work" },
          { name: project.title, path: `/our-work/${slug}` },
        ]}
      />
      <PageHero
        eyebrow="OUR WORK"
        title={project.client ?? project.title}
        description={
          project.templateOnly
            ? "An anonymized case-study template. Project details are pending verification and client approval."
            : project.challenge
        }
        imageSrc={project.heroImage.src}
        imageAlt={project.heroImage.alt}
        imageCaption={
          project.templateOnly
            ? "Illustrative stock photo only, not evidence of work for this client."
            : undefined
        }
        visualVariant="work"
        topContent={
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/our-work" className="hover:text-primary">
              Our Work
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{project.client ?? project.title}</span>
          </nav>
        }
      >
        <dl className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {project.client ? (
              <div>
                <dt className="inline font-medium text-foreground">Client: </dt>
                <dd className="inline">{project.client}</dd>
              </div>
            ) : null}
            {project.sector ? (
              <div>
                <dt className="inline font-medium text-foreground">Sector: </dt>
                <dd className="inline">{project.sector}</dd>
              </div>
            ) : null}
            {project.status ? (
              <div>
                <dt className="inline font-medium text-foreground">Status: </dt>
                <dd className="inline capitalize">{project.status.replace("-", " ")}</dd>
              </div>
            ) : null}
            {project.dates ? (
              <div>
                <dt className="inline font-medium text-foreground">Dates: </dt>
                <dd className="inline">{project.dates}</dd>
              </div>
            ) : null}
        </dl>
      </PageHero>

      <section className="py-12 sm:py-14">
        <Container className="max-w-3xl space-y-8">
          {project.templateOnly ? (
            <div className="border-l-2 border-primary pl-5 text-muted-foreground">
              <p className="font-medium text-foreground">Case-study template · approval pending</p>
              <p className="mt-2">
                Client-approved industry, engagement status and dates, challenge, contracted scope, technical approach, evidence and any permitted results will be added here after verification. No client quote, logo or performance claim is included without written permission.
              </p>
            </div>
          ) : null}
          <SectionBlock title="Challenge">
            {project.challenge ? <p>{project.challenge}</p> : null}
          </SectionBlock>

          <SectionBlock title="Scope">
            {project.scope?.length ? (
              <ul className="list-disc pl-5">
                {project.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </SectionBlock>

          <SectionBlock title="Technical approach">
            {project.technicalApproach?.length ? (
              <ul className="list-disc pl-5">
                {project.technicalApproach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </SectionBlock>

          <SectionBlock title="Deliverables">
            {project.deliverables?.length ? (
              <ul className="list-disc pl-5">
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </SectionBlock>

          {project.screenshots?.length ? (
            <SectionBlock title="Screenshots">
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((shot) => (
                  <li key={shot.src} className="list-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="rounded-lg border border-border"
                    />
                  </li>
                ))}
              </ul>
            </SectionBlock>
          ) : null}

          <SectionBlock title="Results">
            {project.results?.length ? (
              <ul className="list-disc pl-5">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </SectionBlock>

          {project.testimonial ? (
            <SectionBlock title="Client feedback">
              <blockquote className="border-l-2 border-primary pl-4 italic">
                {project.testimonial.quote}
              </blockquote>
              {project.testimonial.author ? (
                <p className="mt-2 text-sm">— {project.testimonial.author}</p>
              ) : null}
            </SectionBlock>
          ) : null}

          {project.launchUrl ? (
            <p>
              <a
                href={project.launchUrl}
                className="text-primary hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                View launch
              </a>
            </p>
          ) : null}

          {relatedServices.length > 0 ? (
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold">Related services</h2>
              <ul className="mt-3 flex flex-wrap gap-3">
                {relatedServices.map((service) =>
                  service ? (
                    <li key={service.slug} className="list-none">
                      <Button href={service.href} variant="secondary" size="md">
                        {service.title}
                      </Button>
                    </li>
                  ) : null,
                )}
              </ul>
            </section>
          ) : null}
        </Container>
      </section>

      <CtaSection
        title="Interested in a similar project?"
        description="Tell us about your requirements and systems—we'll discuss fit and next steps."
      />
    </>
  );
}
