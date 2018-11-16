const { lstatSync, readdirSync } = require('fs')
const { resolve, join } = require('path')

let directories = ['core', 'modules', 'components', 'templates', 'pages']
const ignorePatterns = [
  '**/index.{js,jsx,ts,tsx}',
  '**/theme/**/*.{js,jsx,ts,tsx}',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.base.{js,jsx,ts,tsx}'
]
const sections = directories.map(directory => {
  return {
    key: directory,
    name: directory.toUpperCase(),
    components: `src/${directory}/**/*.{js,jsx,ts,tsx}`,
    ignore: ignorePatterns
  }
})

module.exports = {
  title: 'Mirage',
  webpackConfig: require('./config/webpack.config.dev.js'),
  components: 'src/**/*.{js,jsx,ts,tsx}',
  styleguideDir: resolve(__dirname, './styleguide/'),
  styleguideComponents: {
    ComponentsListRenderer: resolve(__dirname, './styleguide/components/ComponentListRenderer'),
    StyleGuideRenderer: resolve(__dirname, './styleguide/components/StyleGuideRenderer'),
    TableOfContents: resolve(__dirname, './styleguide/components/TableOfContents'),
    Wrapper: resolve(__dirname, './src/core/theme')
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
  pagePerSection: true,
  sections: sections,
  ignore: [
    'src/index.js',
    'src/setupTests.js',
    ...ignorePatterns
  ]
}
