import { ServiceDetailLayout } from "@/components/services/service-detail-layout";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = createPageMetadata({
  title: "Custom CRM Development | Manda Vertex Inc.",
  description:
    "Custom CRM and workflow tools shaped around your team, pipelines and reporting needs.",
  path: "/services/crm-development",
});

export default function CrmDevelopmentPage() {
  const service = getServiceBySlug("crm-development");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      sections={[
        {
          title: "Your Workflow Comes First",
          body:
            "CRM requirements are defined together and built around the way the organization operates—not a generic template forced onto your team.",
        },
        {
          title: "Purpose-Built Records and Pipelines",
          body:
            "Lead capture, contact history, tasks and pipeline stages can reflect how your team actually sells and serves customers.",
        },
        {
          title: "Access and Reporting",
          body:
            "Permission-based access and reporting views can be tailored so each role sees what they need without unnecessary noise.",
        },
      ]}
    />
  );
}
