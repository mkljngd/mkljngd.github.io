/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Optimize for GitHub Pages deployment
  // No basePath needed for mkljngd.github.io (root domain)
  assetPrefix: '',
  basePath: '',
  // Disable server-side features for static export
  experimental: {
    esmExternals: false
  },
  // Optimize build for GitHub Actions
  swcMinify: true,
  compress: true,
  // Ensure proper routing for GitHub Pages
  generateEtags: false,
  poweredByHeader: false
}

module.exports = nextConfig
