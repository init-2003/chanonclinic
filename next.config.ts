import type { NextConfig } from "next";
import { isIndexableDeployment } from "./src/config/site";

const nextConfig: NextConfig = {
  headers() {
    return isIndexableDeployment(process.env) ? [] : [{
      source: "/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    }];
  },
  images: {
    qualities: [75, 90],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
