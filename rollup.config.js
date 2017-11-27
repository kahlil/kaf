import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
  ],
};
