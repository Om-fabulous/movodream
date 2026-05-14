import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Image optimization for Unsplash and external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Cache optimized images for 365 days
    minimumCacheTTL: 31536000,
    // Optimize images in production
    formats: ["image/avif", "image/webp"],
  },

  // Performance optimizations
  compress: true,
  productionBrowserSourceMaps: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;