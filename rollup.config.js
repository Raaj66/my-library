import peerDepsExternal from 'rollup-plugin-peer-deps-external';
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
