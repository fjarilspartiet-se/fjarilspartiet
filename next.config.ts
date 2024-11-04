import { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/fjarilspartiet',
  images: {
    unoptimized: true,
  },
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
