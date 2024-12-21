const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true,
  unstable_staticImage: true,
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need

  images: {
    unoptimized: true,
  },
  // ... other configurations
};

try {
  module.exports = withNextra(nextConfig);
} catch (error) {
  if (!(error instanceof Error)) {
    console.error('An unexpected error occurred:', error);
  } else {
    throw error;
  }
}