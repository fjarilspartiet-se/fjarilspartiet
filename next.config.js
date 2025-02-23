/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only add basePath and image config for production
  ...(process.env.NODE_ENV === 'production' ? {
    images: {
      unoptimized: true,
    },
  } : {}),
  // Remove experimental config as it's not needed for static export
  experimental: {
    externalDir: true,
  },
  // Add this to ignore Supabase functions
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/supabase/**', '**/supabase-functions/**']
    };
    return config;
  }
};

module.exports = nextConfig;
