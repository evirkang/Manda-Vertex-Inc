import { ServiceDetailLayout } from "@/components/services/service-detail-layout";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = createPageMetadata({
  title: "AI Software Integration & Workflow Automation | Manda Vertex",
  description:
    "Connect AI with websites, CRMs, internal tools and approved third-party services through planned integrations and automation.",
  path: "/services/ai-integration",
});

export default function AiIntegrationPage() {
  const service = getServiceBySlug("ai-integration");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      sections={[
        {
          title: "Existing Systems",
          body:
            "Each project begins with a review of existing systems, security needs and the processes that matter most.",
        },
        {
          title: "Integration Planning",
          body:
            "We map data flows, authentication, error handling and ownership so integrations remain maintainable.",
        },
        {
          title: "API Connections & Workflow Automation",
          body:
            "Connections between tools can reduce repetitive tasks and improve information flow when scoped to approved systems.",
        },
        {
          title: "Data Flow",
          body:
            "Information movement is documented so teams understand what travels where and under which access rules.",
        },
        {
          title: "Security Considerations",
          body:
            "Credentials, access and environment separation are planned with your constraints—not every integration uses the same pattern.",
        },
        {
          title: "Testing & Maintenance",
          body:
            "Integrations are validated against core scenarios and can be supported under agreed maintenance terms.",
        },
      ]}
    />
  );
}
