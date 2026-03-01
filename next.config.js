/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-nextjs',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        unoptimized: true,
      },
    ],
  },
}

module.exports = nextConfig
