import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Only use basePath in production for GitHub Pages deployment
  basePath: isProd ? "/Docuras-com-Amor" : "",
  assetPrefix: isProd ? "/Docuras-com-Amor/" : "",
  output: "export",
  trailingSlash: true,
  images: {
    // Desativa otimização automática para facilitar deploy estático (ex.: GitHub Pages)
    unoptimized: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
