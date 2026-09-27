import { ServiceDetailLayout } from "@/components/services/service-detail-layout";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = createPageMetadata({
  title: "Mobile & Web Application Development | Amanda Vertex",
  description:
    "Mobile and web applications planned around users, integrations and deployment constraints.",
  path: "/services/mobile-apps",
});

export default function MobileAppsPage() {
  const service = getServiceBySlug("mobile-apps");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      sections={[
        {
          title: "Requirements Planning",
          body:
            "We clarify users, core journeys, integrations and success criteria before build work begins.",
        },
        {
          title: "UX Design",
          body:
            "Interfaces are structured for clarity and accessibility, aligned with how people actually use the product.",
        },
        {
          title: "Application Development",
          body:
            "Mobile and web architecture should be selected according to the actual project scope and budget—not a default stack for every idea.",
        },
        {
          title: "Integrations",
          body:
            "Applications can connect to existing APIs and business systems where scope and security allow.",
        },
        {
          title: "Testing",
          body:
            "Core scenarios are tested across devices and environments relevant to the project.",
        },
        {
          title: "Deployment Planning",
          body:
            "Release steps, hosting and ongoing ownership are agreed before launch.",
        },
      ]}
    />
  );
}
