import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The portfolio is fully static, so Cloudflare Pages can serve the generated
  // files directly without the deprecated next-on-pages runtime adapter.
  output: "export",
};

export default nextConfig;
