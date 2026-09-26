import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-chatbots",
    number: "01",
    title: "Advanced AI Chatbots",
    shortDescription:
      "Context-aware conversational experiences, knowledge-assisted support and human handoff options.",
    description:
      "Build conversational systems that help customers and teams find information and complete routine tasks.",
    icon: "MessageSquare",
    features: [
      "Knowledge retrieval and conversation design",
      "API connections and role-based access",
      "Testing, monitoring and maintenance",
      "Lead qualification and appointment workflows",
      "Multilingual experiences where required",
      "CRM updates and human escalation paths",
    ],
    heroImage: {
      src: "https://images.pexels.com/photos/8867372/pexels-photo-8867372.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Customer support professionals wearing headsets and working together",
    },
    href: "/services/ai-chatbots",
  },
  {
    slug: "ai-integration",
    number: "02",
    title: "AI & Software Integration",
    shortDescription:
      "Connect chat interfaces, business applications, data sources and APIs.",
    description:
      "Connect AI capabilities with the software your business already uses to reduce repetitive tasks and improve information flow.",
    icon: "Plug",
    features: [
      "Review of existing systems and security needs",
      "Integration planning and API connections",
      "Workflow automation and data flow design",
      "Testing and ongoing maintenance",
    ],
    heroImage: {
      src: "https://images.pexels.com/photos/34804005/pexels-photo-34804005.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Software developer working with code and data on a laptop",
    },
    href: "/services/ai-integration",
  },
  {
    slug: "crm-development",
    number: "03",
    title: "Custom CRM & Automation",
    shortDescription:
      "Purpose-built customer management and workflow tools.",
    description:
      "Manage the customer journey with a CRM designed for your team and the way you operate.",
    icon: "Users",
    features: [
      "Lead capture and contact records",
      "Sales pipelines and task assignments",
      "Appointment management and reporting",
      "Permission-based access",
    ],
    heroImage: {
      src: "https://images.pexels.com/photos/38246349/pexels-photo-38246349.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Business professional reviewing a data dashboard on a laptop",
    },
    href: "/services/crm-development",
  },
  {
    slug: "mobile-apps",
    number: "04",
    title: "Mobile & Web Applications",
    shortDescription:
      "Digital products designed around your users and business processes.",
    description:
      "Turn your product or internal business idea into a functional application with architecture suited to scope and budget.",
    icon: "Smartphone",
    features: [
      "Requirements planning and UX design",
      "Application development and integrations",
      "Testing and deployment planning",
    ],
    heroImage: {
      src: "https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Laptop and smartphone arranged together in a software workspace",
    },
    href: "/services/mobile-apps",
  },
  {
    slug: "ongoing-support",
    number: "05",
    title: "Ongoing Optimization & Support",
    shortDescription:
      "Monitoring, improvements and evolution alongside your operations.",
    description:
      "Where contracted, we can provide monitoring, improvements, bug fixes, training and additional feature development.",
    icon: "LifeBuoy",
    features: [
      "Monitoring and bug fixes",
      "Improvements and additional features",
      "Training and support planning",
    ],
    heroImage: {
      src: "https://images.pexels.com/photos/6804610/pexels-photo-6804610.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Software developer monitoring work across multiple computer screens",
    },
    href: "/services/ongoing-support",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
