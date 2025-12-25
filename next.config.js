// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname, // ensures Turbopack uses the correct project root
  },
};

module.exports = nextConfig;
