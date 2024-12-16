/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // Points to your API route
      },
    ];
  },
};

export default nextConfig;
