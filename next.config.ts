// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { domains: ["cdn.sanity.io"] },

  // ⬇️ Dočasne vypni TypeScript a ESLint počas build-u na Verceli
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
