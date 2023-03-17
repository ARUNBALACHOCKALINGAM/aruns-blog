/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 480, 640, 768, 992, 1080, 1200, 1920, 2048],
    imageSizes: [20, 24, 28, 32, 34, 34, 34, 34, 34],
  },
};

module.exports = nextConfig;
