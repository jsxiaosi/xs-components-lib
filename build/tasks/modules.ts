import { rollup } from 'rollup';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-macros/rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import glob from 'fast-glob';

import type { OutputOptions } from 'rollup';
import { epRoot, pkgRoot } from '../utils/paths';

import { buildConfigEntries } from '../utils/build-info';
import { generateExternal } from '../utils/rollup';

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules'];
  return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)));
};

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    }),
  );

  const bundle = await rollup({
    input,
    plugins: [
      DefineOptions({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: true,
          }),
          vueJsx: vueJsx(),
        },
      }),

      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: await generateExternal(),
    treeshake: false,
  });

  const options = buildConfigEntries.map(([module, config]): OutputOptions => {
    return {
      format: config.format,
      dir: config.output.path,
      exports: module === 'cjs' ? 'named' : undefined,
      preserveModules: true,
      preserveModulesRoot: epRoot,
      sourcemap: true,
      entryFileNames: `[name].${config.ext}`,
    };
  });

  await Promise.all(
    options.map((option) => {
      return bundle.write(option);
    }),
  );
};
