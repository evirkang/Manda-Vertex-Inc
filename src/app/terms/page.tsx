import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { company, getLocationLine } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms | Manda Vertex Inc.",
  description:
    "Website terms draft for Manda Vertex Inc.—subject to owner and legal review.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="MANDA VERTEX / POLICY"
        title="Terms of Use"
        description="This page is a structured draft for owner and legal review. It is not legal advice."
        imageSrc="https://images.pexels.com/photos/8815849/pexels-photo-8815849.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Person reviewing and signing a business contract"
        visualVariant="legal"
      />
      <section className="py-16 sm:py-20">
        <Container className="prose-policy max-w-3xl text-sm">
          <h2>Introduction</h2>
          <p>
            These terms govern use of the {company.displayName} website. By
            accessing the site, you agree to these terms as finalized by legal
            review.
          </p>

          <h2>Website use</h2>
          <p>
            You may use this website for lawful purposes related to learning
            about our services and contacting us. You agree not to misuse the
            site, attempt unauthorized access or interfere with its operation.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Content on this site, including text, graphics and layout, is owned
            by or licensed to {company.displayName} unless otherwise noted.
            Unauthorized reproduction may be prohibited.
          </p>

          <h2>Third-party services</h2>
          <p>
            The site may link to or rely on third-party services (such as form
            delivery or hosting). Those services are subject to their own terms
            and policies.
          </p>

          <h2>Information accuracy</h2>
          <p>
            We aim to keep site information current, but content may change.
            Service descriptions are general and do not constitute a binding
            offer until agreed in a separate contract.
          </p>

          <h2>No guarantee of business outcomes</h2>
          <p>
            Examples and descriptions on this site do not guarantee specific
            results, timelines, revenue or operational outcomes. Project results
            depend on scope, participation and external factors.
          </p>

          <h2>External links</h2>
          <p>
            Links to external sites are provided for convenience. We are not
            responsible for third-party content or practices.
          </p>

          <h2>Limitation and disclaimer</h2>
          <p>
            The website is provided on an &quot;as is&quot; basis to the extent
            permitted by law. Limitations of liability and disclaimers will be
            completed during legal review.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms. Continued use after changes constitutes
            acceptance of the revised terms when permitted by law.
          </p>

          <h2>Contact</h2>
          <p>
            {company.displayName}, {getLocationLine()}.
            {company.email ? (
              <>
                {" "}
                Email:{" "}
                <a href={`mailto:${company.email}`} className="text-primary">
                  {company.email}
                </a>
                .
              </>
            ) : (
              " Use the contact form until verified contact details are published."
            )}
          </p>
        </Container>
      </section>
    </>
  );
}
