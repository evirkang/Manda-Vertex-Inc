import { ServiceDetailLayout } from "@/components/services/service-detail-layout";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = createPageMetadata({
  title: "AI Chatbot Development | Amanda Vertex Inc.",
  description:
    "Design and build AI chatbots with knowledge retrieval, integrations, escalation paths and maintenance suited to your workflows.",
  path: "/services/ai-chatbots",
});

export default function AiChatbotsPage() {
  const service = getServiceBySlug("ai-chatbots");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      ctaLabel="Discuss Your AI Chatbot Project"
      sections={[
        {
          title: "Designed Around the Conversation",
          body:
            "Good conversational experiences begin with understanding users, information sources, workflows and escalation requirements.",
        },
        {
          title: "Connect the Conversation to the Business",
          body:
            "AI can be connected to approved business systems and workflows where appropriate—so responses reflect approved data and actions stay within defined boundaries.",
        },
        {
          title: "Human Handoff Matters",
          body:
            "Appropriate workflows can provide escalation to human representatives when automation is not the right fit.",
        },
        {
          title: "Built With the Right Boundaries",
          body: [
            "Access control, approved knowledge sources and data handling expectations are defined during discovery.",
            "Testing and monitoring help maintain quality over time. Security considerations are addressed per project—specific compliance claims are made only when verified and in scope.",
          ],
        },
      ]}
    />
  );
}
