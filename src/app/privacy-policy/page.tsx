import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { company, getLocationLine } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Amanda Vertex Inc.",
  description:
    "Privacy policy draft for Amanda Vertex Inc. website—subject to owner and legal review.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="AMANDA VERTEX / POLICY"
        title="Privacy Policy"
        description="This page is a structured draft for owner and legal review. It is not legal advice."
        imageSrc="https://images.pexels.com/photos/4973899/pexels-photo-4973899.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Laptop displaying a security lock icon in a workspace"
        visualVariant="legal"
      />
      <section className="py-16 sm:py-20">
        <Container className="prose-policy max-w-3xl text-sm">
          <h2>1. Introduction</h2>
          <p>
            {company.displayName} ({getLocationLine()}) operates this website.
            This policy describes how information may be collected and used when
            you visit the site or submit an inquiry.
          </p>

          <h2>2. Information collected</h2>
          <p>
            We may collect information you provide voluntarily, technical
            information sent by your browser, and data related to form
            submissions as described below.
          </p>

          <h2>3. Contact form information</h2>
          <p>
            When you use our contact form, we collect the fields you submit,
            such as name, company, email, optional phone, service interest,
            project description and consent confirmation.
          </p>

          <h2>4. How information is used</h2>
          <p>
            Information is used to respond to inquiries, evaluate project fit,
            maintain records of communication and improve how we operate the
            website.
          </p>

          <h2>5. Email and contact processing</h2>
          <p>
            Form submissions may be processed through a third-party form
            delivery service (such as Web3Forms when configured) that transmits
            messages to {company.displayName}. Provider terms and data handling
            should be confirmed during legal review.
          </p>

          <h2>6. Cookies</h2>
          <p>
            This site is intended to use only cookies or storage mechanisms
            required for basic operation unless additional services are added
            later. If analytics or marketing tools are introduced, this section
            should be updated.
          </p>

          <h2>7. Analytics</h2>
          <p>
            Analytics tools are not enabled by default. If analytics is added
            with owner approval, this policy will describe the provider and any
            consent requirements.
          </p>

          <h2>8. Third-party services</h2>
          <p>
            Hosting, form delivery and other infrastructure providers may
            process data on our behalf. Specific vendors should be listed here
            after deployment configuration is finalized.
          </p>

          <h2>9. Data retention</h2>
          <p>
            Inquiry records are retained for as long as needed to respond,
            conduct business and meet applicable record-keeping requirements,
            unless a shorter period is agreed or required by law.
          </p>

          <h2>10. Data security</h2>
          <p>
            We use reasonable measures to protect information. No method of
            transmission or storage is completely secure.
          </p>

          <h2>11. Data sharing</h2>
          <p>
            We do not sell personal information. Data may be shared with service
            providers who assist in operating the website or responding to
            inquiries, or when required by law.
          </p>

          <h2>12. User rights</h2>
          <p>
            Depending on applicable law, you may have rights to access, correct
            or delete personal information. Contact us using the details below
            to make a request.
          </p>

          <h2>13. Contact information</h2>
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
              " Use the contact form on this website until a verified email is published."
            )}
          </p>

          <h2>14. Policy updates</h2>
          <p>
            We may update this policy from time to time. The revised version
            will be posted on this page with an updated effective date when
            provided by legal review.
          </p>
        </Container>
      </section>
    </>
  );
}
