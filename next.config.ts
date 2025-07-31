import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Docuras-com-Amor",
  assetPrefix: "/Docuras-com-Amor/",
  images: {
    unoptimized: true, // 👈 Desativa otimização automática para funcionar no GitHub Pages
  },
};

export default nextConfig;