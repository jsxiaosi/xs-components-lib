import { rollup } from 'rollup';
import glob from 'fast-glob';

import type { OutputOptions } from 'rollup';
import { pkgRoot } from '../utils/paths';

import { buildConfigEntries } from '../utils/build-config';
import { generateExternal, rollupBuildPlugins } from '../utils/rollup';

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
    plugins: rollupBuildPlugins(),
    external: await generateExternal(),
    treeshake: false,
  });

  const options = buildConfigEntries.map(([module, config]): OutputOptions => {
    return {
      format: config.format,
      dir: config.output.path,
      exports: module === 'cjs' ? 'named' : undefined,
      preserveModules: true,
      preserveModulesRoot: pkgRoot,
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
