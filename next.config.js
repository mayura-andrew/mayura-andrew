const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || ''
};

try {
  module.exports = withNextra(nextConfig);
} catch (err) {
  // Ensure we're always working with Error instances
  const error = err instanceof Error ? err : new Error(String(err));
  console.error(error);
  throw error;
}