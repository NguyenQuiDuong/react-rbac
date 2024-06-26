import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { visualizer } from 'rollup-plugin-visualizer';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'build/index.es.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    visualizer(),
    terser(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
