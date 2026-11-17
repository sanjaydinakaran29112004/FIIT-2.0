import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Fast dev & optimized compilation */
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
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
