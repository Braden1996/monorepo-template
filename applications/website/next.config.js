/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')();
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  target: 'serverless',
  experimental: {
    externalDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([withTM], nextConfig);
