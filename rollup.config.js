/* eslint-env node */
import cleaner from 'rollup-plugin-cleaner';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const external = Object.keys(globals);
const extensions = ['.ts', '.tsx'];
const env = process.env.NODE_ENV;

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    globals,
  },
  plugins: [
    cleaner({
      targets: ['./dist/'],
    }),
    postcss({
      extensions: ['.css'],
    }),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify(env),
      },
    }),
    commonjs(),
    nodeResolve({
      preferBuiltins: true,
      extensions,
    }),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      extensions,
    }),
    json(),
  ],
  external,
  onwarn: function (warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }

    // console.warn everything else
    console.warn(warning.message);
  },
};
