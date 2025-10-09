import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Only use basePath in production for GitHub Pages deployment
  basePath: isProd ? "/Docuras-com-Amor" : "",
  assetPrefix: isProd ? "/Docuras-com-Amor/" : "",
  images: {
    // Desativa otimização automática para facilitar deploy estático (ex.: GitHub Pages)
    unoptimized: true,
  },
  allowedDevOrigins: ['http://192.168.1.10:3000', 'http://localhost:3000'],
};

export default nextConfig;
