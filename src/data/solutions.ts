import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    slug: "customer-service-inquiry-routing",
    title: "Customer-Service Inquiry Routing",
    description:
      "Incoming questions can be categorized, routed to the right team or channel, and escalated when a human response is needed—reducing repetitive handling while keeping clear paths for complex cases.",
    label: "Example solution",
    relatedServiceSlug: "ai-chatbots",
  },
  {
    slug: "service-business-booking",
    title: "Service-Business Booking Workflows",
    description:
      "Inquiries and booking steps can be connected so customers move through availability, confirmation and reminders with less manual coordination for your team.",
    label: "Example solution",
    relatedServiceSlug: "ai-integration",
  },
  {
    slug: "sales-follow-up-automation",
    title: "Sales Follow-Up Automation",
    description:
      "Follow-up tasks, reminders and status updates can be tied to your pipeline so reps spend less time on repetitive tracking and more on conversations that matter.",
    label: "Example solution",
    relatedServiceSlug: "crm-development",
  },
  {
    slug: "internal-knowledge-assistants",
    title: "Internal Knowledge Assistants",
    description:
      "Teams can retrieve policies, procedures and internal documentation through a controlled assistant experience aligned with approved sources and access rules.",
    label: "Potential use case",
    relatedServiceSlug: "ai-chatbots",
  },
  {
    slug: "tailored-customer-portals",
    title: "Tailored Customer Portals",
    description:
      "Customer-facing portals can centralize account information, requests and updates—designed around your brand and operational workflows.",
    label: "Potential use case",
    relatedServiceSlug: "mobile-apps",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
