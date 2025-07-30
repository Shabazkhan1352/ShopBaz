/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'm.media-amazon.com',
      'fakestoreapi.com'
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig