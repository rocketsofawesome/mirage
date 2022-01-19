const path = require('path')
const env = {
  'development': './config/webpack.config.dev.js',
  'production': './config/webpack.config.prod.js'
}
console.log(env[process.env.NODE_ENV])
const KLARNA_SCRIPT_SRC = process.env.KLARNA_SCRIPT_SRC
const KLARNA_CLIENT_ID = process.env.KLARNA_CLIENT_ID
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
        {src: 'https://js.stripe.com/v3/'},
        {
          src: 'https://na-library.playground.klarnaservices.com/lib.js',
          'data-client-id': '9c24f8be-b441-5cf4-92bb-772269dcba03'
        }
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
