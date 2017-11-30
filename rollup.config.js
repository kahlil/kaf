import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: 'js/index.js',
  output: {
    file: 'dist/js/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  name: 'kaf',
  plugins: [
    resolve({
      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true, // Default: false
    }),
    commonjs(),
    uglify({}, minify),
  ],
};
