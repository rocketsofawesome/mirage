const path = require('path')
require('core-js');
const env = {
  'development': './config/webpack.config.dev.js',
  'production': './config/webpack.config.prod.js'
}
console.log(env[process.env.NODE_ENV])
module.exports = {
  title: 'Mirage - ROA Pattern Library',
  webpackConfig: require(env[process.env.NODE_ENV]),
  components: 'src/**/*.{js,jsx,ts,tsx}',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/core/theme')
  },
  theme: {
    maxWidth: 'auto'
  },
  template: {
    favicon: '//res.cloudinary.com/roa-canon/image/upload/v1508867160/favicon.ico',
    head: {
      scripts: [
        {src: 'https://use.typekit.net/bfw8xpa.js'},
        {src: 'src/theme/typekit.js'}
      ]
    }
  },
  ignore: [
    'src/index.js',
    '**/index.js',
    'src/setupTests.js',
    '**/theme/**/*.{js,jsx,ts,tsx}',
    '**/defaultProps.{js,jsx,ts,tsx}',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.base.{js,jsx,ts,tsx}'
  ],
  pagePerSection: true
}
