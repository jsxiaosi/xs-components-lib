import { resolve } from 'path';

import type { OutputOptions, RollupBuild } from 'rollup';
import { projRoot } from './paths';

export const epPackage = resolve(projRoot, 'package.json');

export const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath);
};

export const getPackageDependencies = (
  pkgPath: string,
): Record<'dependencies' | 'devDependencies', string[]> => {
  const manifest = getPackageManifest(pkgPath);
  const { dependencies = {}, devDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    devDependencies: Object.keys(devDependencies),
  };
};

export const generateExternal = async () => {
  const { dependencies, devDependencies } = getPackageDependencies(epPackage);
  return [...dependencies, ...devDependencies];
};

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)));
}

export function formatBundleFilename(name: string, minify: boolean, ext: string) {
  return `${name}${minify ? '.min' : ''}.${ext}`;
}
