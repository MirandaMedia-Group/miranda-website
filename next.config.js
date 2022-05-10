module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: [
      '164.92.206.112',
      'backend.mirandamedia.cz',
      'localhost'
    ],
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  sassOptions: {
    includePaths: ['./'],
    prependData: `@import "styles/variables.scss"; @import "styles/_mixins.scss";`,
  }
}