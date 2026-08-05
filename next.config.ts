import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/coding-app',
        // TODO: Replace this destination with the actual Vercel URL of your html-tutor-app
        destination: 'https://code-illustrated.vercel.app/coding-app',
      },
      {
        source: '/coding-app/:path*',
        // TODO: Replace this destination with the actual Vercel URL of your html-tutor-app
        destination: 'https://code-illustrated.vercel.app/coding-app/:path*',
      },
    ];
  },
};

export default nextConfig;
