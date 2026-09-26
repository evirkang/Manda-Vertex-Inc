import { company, getLocationLine } from "@/data/company";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const url = absoluteUrl("/");
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.displayName,
    ...(url ? { url } : {}),
    description: siteConfig.defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.location.city,
      addressRegion: company.location.province,
      addressCountry: company.location.country,
    },
  };

  if (company.email) {
    data.email = company.email;
  }

  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const url = absoluteUrl("/");
  if (!url) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url,
        description: siteConfig.defaultDescription,
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const list = items
    .map((item, index) => {
      const itemUrl = absoluteUrl(item.path);
      if (!itemUrl) return null;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    })
    .filter(Boolean);

  if (list.length === 0) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: list,
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  if (!url) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
          "@type": "Organization",
          name: company.displayName,
          address: getLocationLine(),
        },
        areaServed: company.location.country,
        url,
      }}
    />
  );
}
