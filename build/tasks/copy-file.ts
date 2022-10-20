import { resolve, join } from 'path';
import { copy, copyFile } from 'fs-extra';
import type { TaskFunction } from 'gulp';
import { parallel } from 'gulp';
import { buildOutput, epOutput, pkgRoot } from '../utils/paths';
import type { Module } from '../utils/build-info';
import { buildConfig } from '../utils/build-info';

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = resolve(buildOutput, 'types', 'packages');
  const copyTypes = (module: Module) =>
    Object.assign(() => copy(src, buildConfig[module].output.path, { recursive: true }), {
      displayName: `copyTypes:${module}`,
    });

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done);
};

export const copyComponentsPackages = () => {
  return copyFile(resolve(pkgRoot, 'package.json'), join(epOutput, 'package.json'));
};
