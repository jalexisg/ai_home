import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai_home",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
