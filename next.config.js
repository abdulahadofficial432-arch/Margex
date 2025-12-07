/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['margex.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig

