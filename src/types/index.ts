export type ProjectStatus = "signed" | "in-development" | "delivered";

export type Project = {
  slug: string;
  title: string;
  client?: string;
  heroImage: { src: string; alt: string };
  sector?: string;
  status?: ProjectStatus;
  dates?: string;
  challenge?: string;
  scope?: string[];
  technicalApproach?: string[];
  deliverables?: string[];
  results?: string[];
  testimonial?: { quote: string; author?: string };
  logo?: string;
  screenshots?: { src: string; alt: string }[];
  launchUrl?: string;
  relatedServiceSlugs?: string[];
  templateOnly?: boolean;
  published: boolean;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
  number: string;
  heroImage: { src: string; alt: string };
};

export type Solution = {
  slug: string;
  title: string;
  description: string;
  label: "Example solution" | "Potential use case";
  relatedServiceSlug: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  label: string;
};

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  website?: string;
};

export type ContactFormErrors = Partial<
  Record<keyof Omit<ContactFormValues, "website">, string>
>;

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; kind: "validation" | "network" | "config" | "spam" | "unknown" };
