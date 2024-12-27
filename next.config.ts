import { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', 
  // Only add basePath and image config for production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/fjarilspartiet',
    images: {
      unoptimized: true,
    },
  } : {}),
  // Enable server-side features
  serverRuntimeConfig: {
    PROJECT_ROOT: process.cwd(),
  },
  // Keep experimental config
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
