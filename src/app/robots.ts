import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexableDeployment } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Crawlers must be able to read the noindex metadata on preview deployments.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(isIndexableDeployment(process.env) ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
