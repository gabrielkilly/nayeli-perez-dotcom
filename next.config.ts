import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['dev.nabitat.me'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
    ],
  }
};

export default nextConfig;
