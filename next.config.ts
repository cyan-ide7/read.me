import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/self",
  assetPrefix: "/self",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
