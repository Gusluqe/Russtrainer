const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ejemplo.com',
      },
    ],
  },
}

module.exports = nextConfig