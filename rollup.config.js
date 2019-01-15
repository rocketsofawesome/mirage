// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'Mirage',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      'styled-components': 'styled'
    }
  },
  // All the used libs needs to be here
  external: [
    'react',
    'prop-types',
    'styled-components',
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
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
      exclude: ['node_modules/react', 'node_modules/react-dom'],
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'react-sizeme': [ 'withSize' ]
      }
    })
  ]
}
