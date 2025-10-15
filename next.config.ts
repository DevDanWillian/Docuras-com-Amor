import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production" || process.env.GITHUB_PAGES === "true";

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
  async headers(){
    return [
      {
        // Match all routes
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow all origins (use specific origins in production)
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  }
};

export default nextConfig;
