import type { MetadataRoute } from "next";
import { SITE_LAST_MODIFIED, SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sections are fragments of the same page, not separate indexable URLs.
  return [{ url: SITE_URL, lastModified: SITE_LAST_MODIFIED }];
}
