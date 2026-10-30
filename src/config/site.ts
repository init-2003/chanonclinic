/** Canonical production origin. Change here when the clinic gets its own domain. */
export const SITE_URL = "https://chanonclinic.vercel.app/";

/** Update when the public page's content changes, never on each request/build. */
export const SITE_LAST_MODIFIED = "2026-10-30";

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, SITE_URL).toString();
}

export function isIndexableDeployment(environment: Record<string, string | undefined>): boolean {
  return environment.NODE_ENV === "production"
    && (!environment.VERCEL_ENV || environment.VERCEL_ENV === "production")
    && environment.SITE_NOINDEX !== "true";
}
