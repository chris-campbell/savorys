/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  env: {
    COMMERCE_PUBLIC_KEY:
      "pk_test_4135668ad5e7e61a5b8c0e9c20785e7293aadbd3c37be",
    COMMERCE_SECRET_KEY:
      "sk_test_413566ad98604d16a419ca62a9d522924c1d4a54405ef",
  },
  images: {
    domains: [
      "hoppr-portfolio.s3.us-east-2.amazonaws.com",
      "images.unsplash.com",
      "media.graphcms.com",
      "cdn.chec.io",
    ],
  },
};

module.exports = nextConfig;
