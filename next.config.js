/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "cdn.shopify.com"],
  },
};
