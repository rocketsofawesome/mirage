// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  // All the used libs needs to be here
  external: [
    'react',
    'prop-types',
    'styled-components',
    'styleguidist'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    alias: ({
      SRC: './src'
    })
  ]
}
