export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path: string): string | undefined {
  const base =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
    process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : undefined;
  if (!base) return undefined;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
