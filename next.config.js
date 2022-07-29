const debug = process.env.NODE_ENV !== "production";
const url = !debug ? '' : ''

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'akamai',
    path: url,
  },
  assetPrefix: url,
  typescript: {
    ignoreBuildErrors: true,
  },
}