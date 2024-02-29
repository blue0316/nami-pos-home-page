import NextIntlPlugin from 'next-intl/plugin';
import './src/lib/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
    ],
  },
  experimental: {
    taint: true,
  },
};
const withNextIntl = NextIntlPlugin('./src/i18n.ts');
export default withNextIntl(nextConfig);
