/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "http",
        hostname: "api.deezer.com",
      },
    ],
  },
};

export default nextConfig;
