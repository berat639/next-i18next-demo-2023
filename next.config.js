const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['swiperjs.com', 'cdn.fundprio.ai','cdn.fundprio.ai','https://cdn.fundprio.ai/','https://cdn.fundprio.ai/images/fundprio/',''],
  },
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  i18n,
};

module.exports = nextConfig;
