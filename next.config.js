/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

// Log environment variable during startup
console.log(
  '🔧 NEXT_PUBLIC_UMAMI_WEBSITE_ID:',
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
);

module.exports = nextConfig;
