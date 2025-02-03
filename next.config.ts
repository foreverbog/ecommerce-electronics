import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "storage.googleapis.com" },
      { hostname: "fakeimg.pl" },
    ],
  },
};

export default nextConfig;
