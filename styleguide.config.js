const path = require('path')
const env = {
  'development': './config/webpack.config.dev.js',
  'production': './config/webpack.config.prod.js'
}
console.log(env[process.env.NODE_ENV])
module.exports = {
  title: 'Mirage - ROA Pattern Library',
  webpackConfig: require(env[process.env.NODE_ENV]),
  components: 'src/**/*.{js,jsx,ts,tsx}',
  require: [
    path.join(__dirname, 'src/services/contentful.js')
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/core/theme')
  },
  theme: {
    maxWidth: 'auto'
  },
  template: {
    favicon: '//d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1508867160/favicon.ico',
    head: {
      scripts: [
        {src: 'https://use.typekit.net/bfw8xpa.js'},
        {src: 'src/theme/typekit.js'},
        {src: 'https://js.stripe.com/v3/'}
      ],
      links: [
        {
          rel: 'stylesheet',
          href:'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        }
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
