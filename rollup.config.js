// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

export default [
  // CommonJS build
  {
    input: 'src/index.js',
    external: ['react', 'react-dom'], // Mark React as external
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'named'
    },
    plugins: [
      resolve({ extensions }),
      vue({ css: true, compileTemplate: true }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions
      }),
      terser()
    ]
  },
  // ES module build
  {
    input: 'src/index.js',
    external: ['react', 'react-dom'], // Mark React as external
    output: {
      file: 'dist/esm/index.js',
      format: 'esm'
    },
    plugins: [
      resolve({ extensions }),
      vue({ css: true, compileTemplate: true }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions
      }),
      terser()
    ]
  }
];
