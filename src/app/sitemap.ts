import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/services/ai-chatbots",
  "/services/ai-integration",
  "/services/crm-development",
  "/services/mobile-apps",
  "/services/ongoing-support",
  "/solutions",
  "/our-work",
  "/process",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
    process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : null;

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => {
    const url = base ? `${base}${path}` : absoluteUrl(path) ?? path;
    return {
      url,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
    };
  });

  for (const project of getPublishedProjects()) {
    const path = `/our-work/${project.slug}`;
    const url = base ? `${base}${path}` : absoluteUrl(path) ?? path;
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
