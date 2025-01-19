import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    runtime: 'nodejs',
  };

export default nextConfig;
