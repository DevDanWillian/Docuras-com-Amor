/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Docuras-com-Amor",
  assetPrefix: "/Docuras-com-Amor/",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['http://192.168.1.10:3000'], // Adicione esta linha
};

module.exports = nextConfig;