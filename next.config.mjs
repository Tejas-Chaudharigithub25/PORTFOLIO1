// next.config.mjs

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/PortFolio' : '',
  assetPrefix: isProd ? '/PortFolio/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;