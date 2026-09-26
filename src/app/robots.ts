import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
    process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : undefined;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: base ? `${base}/sitemap.xml` : "/sitemap.xml",
  };
}
