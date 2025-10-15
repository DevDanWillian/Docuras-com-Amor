import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production" || process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Only use basePath in production for GitHub Pages deployment
  basePath: isProd ? "/Docuras-com-Amor" : "",
  assetPrefix: isProd ? "/Docuras-com-Amor/" : "",
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Desativa otimização automática para facilitar deploy estático (ex.: GitHub Pages)
    unoptimized: true,
  }
};

export default nextConfig;
