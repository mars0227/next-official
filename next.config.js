const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  },
  target: 'serverless', // <- add here
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
});