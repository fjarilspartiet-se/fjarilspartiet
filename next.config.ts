/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  // Add this section to allow reading files from parent directory
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
