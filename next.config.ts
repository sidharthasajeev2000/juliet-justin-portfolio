import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/juliet-justin-portfolio",
  trailingSlash: true,
};

export default nextConfig;
