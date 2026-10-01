import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.244.105.250', '192.168.1.174'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stjsotihzxcnykwsmjnj.supabase.co",
      },
    ],
  },
};

export default nextConfig;
