import replace from 'rollup-plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const input = './modules/index.js';
const globalName = 'resolvePathname';

const cjs = [
  {
    input,
    output: { file: `cjs/${pkg.name}.js`, format: 'cjs' },
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  },
  {
    input,
    output: { file: `cjs/${pkg.name}.min.js`, format: 'cjs' },
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify()
    ]
  }
];

const esm = [
  {
    input,
    output: { file: `esm/${pkg.name}.js`, format: 'esm' },
    plugins: [sizeSnapshot()]
  }
];

const umd = [
  {
    input,
    output: { file: `umd/${pkg.name}.js`, format: 'umd', name: globalName },
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: { file: `umd/${pkg.name}.min.js`, format: 'umd', name: globalName },
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      uglify()
    ]
  }
];

let config;
switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs;
    break;
  case 'esm':
    config = esm;
    break;
  case 'umd':
    config = umd;
    break;
  default:
    config = cjs.concat(esm).concat(umd);
}

export default config;
