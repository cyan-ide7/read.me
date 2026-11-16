import type { NextConfig } from "next";

// In GitHub Actions, GITHUB_REPOSITORY is "owner/repo-name"
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "/read.me";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  assetPrefix: repoName,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
};

export default nextConfig;
