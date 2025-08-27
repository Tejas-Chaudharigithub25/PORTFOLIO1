/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/PORTFOLIO1' : '',
  assetPrefix: isProd ? '/PORTFOLIO1/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
