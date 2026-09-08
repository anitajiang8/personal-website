import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json sits in ~/Desktop; without this Next infers
  // the wrong workspace root and warns on every build.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
