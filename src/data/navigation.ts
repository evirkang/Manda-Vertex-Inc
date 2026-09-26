import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Work", href: "/our-work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "AI Chatbots", href: "/services/ai-chatbots" },
  { label: "AI Integration", href: "/services/ai-integration" },
  { label: "CRM Development", href: "/services/crm-development" },
  { label: "Mobile & Web Applications", href: "/services/mobile-apps" },
  { label: "Ongoing Support", href: "/services/ongoing-support" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
