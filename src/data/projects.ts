import type { Project } from "@/types";

/**
 * Case studies — set `published: true` only with owner-approved content.
 * Internal dev notes belong in comments only, never in rendered fields.
 */
export const projects: Project[] = [
  {
    slug: "client-a-operations-automation",
    title: "Client A Case Study",
    client: "Client A",
    heroImage: {
      src: "https://images.pexels.com/photos/12903339/pexels-photo-12903339.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Colleagues discussing project details in a contemporary workplace",
    },
    templateOnly: true,
    published: true,
  },
  {
    slug: "client-b-service-operations",
    title: "Client B Case Study",
    client: "Client B",
    heroImage: {
      src: "https://images.pexels.com/photos/10375935/pexels-photo-10375935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Business professionals reviewing plans during a project meeting",
    },
    templateOnly: true,
    published: true,
  },
];

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.published);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPublishedProjectBySlug(slug: string): Project | undefined {
  const project = getProjectBySlug(slug);
  if (!project?.published) return undefined;
  return project;
}
