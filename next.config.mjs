/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/s.sabiran",
  assetPrefix: "/s.sabiran/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
