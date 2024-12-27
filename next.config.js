/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only add basePath and image config for production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/fjarilspartiet',
    images: {
      unoptimized: true,
    },
  } : {}),
  // Allow static file serving
  trailingSlash: true,
  // Remove experimental config as it's not needed for static export
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
