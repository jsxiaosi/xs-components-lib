import { resolve } from 'path';
import fs from 'fs';

export const projRoot = resolve(__dirname, '..', '..');

// name
export const PKG_NAME = 'xs-components';
export const PKG_HUMP_NAME = 'XsComponents';

// packages
export const pkgRoot = resolve(projRoot, 'packages');
export const epRoot = resolve(pkgRoot, PKG_NAME);

// dist
export const buildOutput = resolve(projRoot, 'dist');
export const epOutput = resolve(buildOutput, PKG_NAME);
export const epOutputCdn = resolve(epOutput, 'cdn');

// 检查目录是否存在
export function directoryExists(directory: string) {
  return fs.existsSync(directory) && fs.lstatSync(directory).isDirectory();
}
