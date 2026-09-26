import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogUrl = absoluteUrl("/");
const ogImage = company.ogImageSrc ?? undefined;

export const metadata: Metadata = {
  metadataBase: company.siteUrl ? new URL(company.siteUrl) : undefined,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.keywords],
  alternates: ogUrl ? { canonical: ogUrl } : undefined,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    url: ogUrl,
    ...(ogImage ? { images: [{ url: ogImage }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
