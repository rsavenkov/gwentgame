const debug = process.env.NODE_ENV !== "production";
const url = !debug ? '' : ''

module.exports = {
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/faq': { page: '/faq' },
      '/calendar': { page: '/calendar' },
      '/gallery': { page: '/gallery' },
      '/news': { page: '/news' },
      '/onlineRequest': { page: '/onlineRequest' },
      '/cards': { page: '/cards' },
      '/docs': { page: '/docs' },
      '/tutorials': { page: '/tutorials' },
    };
  },
  images: {
    loader: 'akamai',
    path: url,
  },
  assetPrefix: url,
  basePath: process.env.NODE_ENV === "development" ? '' : '',
}