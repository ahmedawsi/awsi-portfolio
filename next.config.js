/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  compress: true,
  allowedDevOrigins: ['192.168.10.170', 'localhost'],
};

module.exports = nextConfig;
