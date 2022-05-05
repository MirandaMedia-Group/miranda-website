module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: [
      '164.92.206.112',
      'backend.mirandamedia.cz',
      'localhost'
  ],
  },
  sassOptions: {
    includePaths: ['./'],
    prependData: `@import "styles/variables.scss"; @import "styles/_mixins.scss";`,
  }
}