import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/read.me",
  assetPrefix: "/read.me",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
