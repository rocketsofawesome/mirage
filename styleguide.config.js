const path = require('path')

module.exports = {
  title: 'Mirage - ROA Pattern Library',
  webpackConfig: require('./config/webpack.config.dev.js'),
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
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.base.{js,jsx,ts,tsx}'
  ],
  pagePerSection: true
}