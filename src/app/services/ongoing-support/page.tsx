import { ServiceDetailLayout } from "@/components/services/service-detail-layout";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = createPageMetadata({
  title: "Technology Optimization & Support | Manda Vertex",
  description:
    "Ongoing monitoring, fixes, improvements and feature work under agreed support terms.",
  path: "/services/ongoing-support",
});

export default function OngoingSupportPage() {
  const service = getServiceBySlug("ongoing-support");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      sections={[
        {
          title: "Monitoring",
          body:
            "Where contracted, we can watch agreed signals so issues surface before they disrupt operations.",
        },
        {
          title: "Bug Fixes",
          body:
            "Defects are prioritized against impact and the support agreement in place.",
        },
        {
          title: "Improvements",
          body:
            "Incremental refinements can keep systems aligned with changing workflows.",
        },
        {
          title: "Training",
          body:
            "Teams can receive guidance on new features or operational changes when included in scope.",
        },
        {
          title: "Additional Features",
          body:
            "New capabilities are scoped and scheduled separately or as part of an enhancement plan.",
        },
        {
          title: "Support Planning",
          body:
            "Support levels, response times and maintenance fees are defined in each service agreement.",
        },
      ]}
    />
  );
}
