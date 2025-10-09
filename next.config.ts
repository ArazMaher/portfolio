const nextConfig = {
  output: 'export',
  basePath: '/https://ArazMaher.github.io/my-portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;