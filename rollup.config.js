import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import jsx from 'acorn-jsx';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    alias({
      /**
       * For custom files extension you might want to add "customerResolver"
       * https://github.com/rollup/plugins/tree/master/packages/alias#custom-resolvers
       *
       * By doing that this plugin can read different kind of files.
       */
      // resolve: ['.ts', '.tsx'],
      // entries: resolveEntries(),
      entries: [
        {
          find: 'models',
          replacement: path.resolve(__dirname, 'src/models'),
        },
        {
          find: 'helper',
          replacement: path.resolve(__dirname, 'src/helper'),
        },
      ],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    // typescript({ useTsconfigDeclarationDir: true }),
    typescript({ lib: ['es5', 'es6', 'dom'], target: 'es6', jsx: 'preserve' }),
    postcss(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    del({ targets: ['dist/*'] }),
    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'build',
          rename: 'variables.scss',
        },
        {
          src: 'src/typography.scss',
          dest: 'build',
          rename: 'typography.scss',
        },
      ],
    }),
  ],
};
