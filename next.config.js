/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only add basePath and image config for production
  ...(process.env.NODE_ENV === 'production' ? {
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
  },
  async redirects() {
    return [
      {
        source: '/aubi',
        destination: '/losningar?tab=aubi',
        permanent: true, // or false if it's a temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
