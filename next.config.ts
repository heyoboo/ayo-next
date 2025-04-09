import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTION ? 'export' : undefined,
  basePath: process.env.PAGES_BASE_PATH,
  reactStrictMode: true,
};

export default nextConfig;
