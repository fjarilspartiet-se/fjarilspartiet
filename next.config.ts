import { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Only enable static export for production builds
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/fjarilspartiet',
    images: {
      unoptimized: true,
    },
  } : {}),
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
      },
    };
    return config;
  },
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
