import type { SocialLink } from "@/types";

/** Owner-verified fields — update before publication where noted. */
export const company = {
  legalName: "Manda Vertex Inc.",
  displayName: "Manda Vertex Inc.",
  founderName: "Amandeep Kaur",
  founderTitle: "Founder",
  /** Set true only after verification against incorporation records */
  showFederallyIncorporated: false,
  location: {
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
  },
  /** Street address — omit until owner authorizes */
  streetAddress: null as string | null,
  email:
    typeof process.env.NEXT_PUBLIC_CONTACT_EMAIL === "string" &&
    process.env.NEXT_PUBLIC_CONTACT_EMAIL.length > 0
      ? process.env.NEXT_PUBLIC_CONTACT_EMAIL
      : null,
  phone:
    typeof process.env.NEXT_PUBLIC_CONTACT_PHONE === "string" &&
    process.env.NEXT_PUBLIC_CONTACT_PHONE.length > 0
      ? process.env.NEXT_PUBLIC_CONTACT_PHONE
      : null,
  siteUrl:
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
    process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : null,
  bookingUrl:
    typeof process.env.NEXT_PUBLIC_BOOKING_URL === "string" &&
    process.env.NEXT_PUBLIC_BOOKING_URL.length > 0
      ? process.env.NEXT_PUBLIC_BOOKING_URL
      : null,
  logoSrc: null as string | null,
  founderPhotoSrc: null as string | null,
  ogImageSrc: null as string | null,
  socialLinks: [] as SocialLink[],
  incorporationNumber: null as string | null,
} as const;

export function getLocationLine(): string {
  const { city, province, country } = company.location;
  return `${city}, ${province}, ${country}`;
}

export function getDiscoveryCallHref(): string {
  return company.bookingUrl ?? "/contact";
}
