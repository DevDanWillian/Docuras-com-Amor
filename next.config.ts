import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/Docuras-com-Amor" : undefined,
  assetPrefix: isProd ? "/Docuras-com-Amor/" : undefined,
  images: {
    // Desativa otimização automática para facilitar deploy estático (ex.: GitHub Pages)
    unoptimized: true,
  },
};

export default nextConfig;
