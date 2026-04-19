/** Canonical site URL for metadata, OG tags, and absolute resume links. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv && /^https?:\/\//i.test(fromEnv)) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  return "http://localhost:3000";
}
