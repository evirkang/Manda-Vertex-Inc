import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    keywords: [...siteConfig.keywords],
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
