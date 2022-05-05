module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      '164.92.206.112',
      'backend.mirandamedia.cz'
  ],
  },
  sassOptions: {
    includePaths: ['./'],
    prependData: `@import "styles/variables.scss"; @import "styles/_mixins.scss";`,
  }
}
