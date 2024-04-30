/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/youtube-thumbnail-generator',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
