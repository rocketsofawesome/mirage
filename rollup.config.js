// node-resolve will resolve all the node dependencies
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  // All the used libs needs to be here
  external: [
    'prop-types',
    'styled-components',
    'styleguidist'
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    alias({
      SRC: resolveApp('src'),  // Will check for ./bar.jsx and ./bar.js
      resolve: ['.js', '/index.js'] ,
    })
  ],
  globals: {
    'styled-components': 'styled'
  },
}
