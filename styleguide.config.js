const path = require('path')

module.exports = {
  title: 'Mirage - ROA Pattern Library',
  webpackConfig: require('./config/webpack.config.dev.js'),
  components: 'src/**/*.{js,jsx,ts,tsx}',
  styleguideComponents: {
    Wrapper: 'src/theme'
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
  ignore: ['**/theme/**/*.{js,jsx,ts,tsx}'],
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: () => [
        './src/header/navigation/navigation.js',
        './src/header/navigation/navigationRegion.js'
      ]
    },
    {
      name: 'Typeography',
      components: () => [
        './src/typography/caption.js',
        './src/typography/h1.js',
        './src/typography/h2.js',
        './src/typography/h3.js',
        './src/typography/h4.js',
        './src/typography/label.js',
        './src/typography/p.js',
        './src/typography/serif.js',
        './src/link/link.js'
      ]
    },
    {
      name: 'Colors',
      components: () => [
        './src/theme/colors.js'
      ]
    },
    {
      name: 'Breakpoints',
      components: () => [
        './src/theme/breakpointExample.js'
      ]
    },
    {
      name: 'Grid',
      components: () => [
        './src/grid/col.js',
        './src/grid/row.js'
      ]
    },
    {
      name: 'Inputs',
      components: () => [
        './src/inputs/sizeRadio.js',
        './src/inputs/button.js'
      ]
    },
    {
      name: 'Icons',
      components: () => [
        './src/icons/aIcon.js',
        './src/icons/chevron.js',
        './src/icons/logo.js',
        './src/icons/spinner.js'
      ]
    }
  ]
}
