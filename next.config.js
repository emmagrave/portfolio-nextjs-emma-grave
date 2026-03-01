/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-nextjs-emma-grave',
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
