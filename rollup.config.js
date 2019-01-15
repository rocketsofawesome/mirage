// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'Mirage'
  },
  // All the used libs needs to be here
  external: [
    'cloudinary-core',
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
    alias({
      SRC: resolveApp('src'),  // Will check for ./bar.jsx and ./bar.js
      resolve: ['.js', '/index.js'] ,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'react-sizeme': [ 'withSize' ]
      }
    })
  ]
}
