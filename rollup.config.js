import image from '@rollup/plugin-image';
import autoprefixer from 'autoprefixer';
import path from 'path';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';
import visualizer from 'rollup-plugin-visualizer';

const reactLibraryAndStyleUtilities = {
  input: 'src/react-library/index.ts',
  output: [
    {
      exports: 'named',
      file: path.join(__dirname, 'packages/react-library/index.js'),
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(),
    image(),
    terser(),
    filesize(),
    visualizer(),
    ts({
      tsconfig: 'tsconfig.esm.json',
    }),
    postcss({
      modules: true,
      plugins: [autoprefixer],
      use: ['sass'],
    }),
    copy({
      targets: [
        { src: 'src/style-utilities/**/*', dest: 'packages/style-utilities' },
      ],
    }),
  ],
};

const muiTheme = {
  input: 'src/mui-theme/mui-theme.js',
  output: [
    {
      exports: 'named',
      file: path.join(__dirname, 'packages/mui-theme/index.js'),
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(),
    terser(),
    filesize(),
    visualizer(),
    ts({
      tsconfig: 'tsconfig.esm.json',
    }),
  ],
};

export default [reactLibraryAndStyleUtilities, muiTheme];
