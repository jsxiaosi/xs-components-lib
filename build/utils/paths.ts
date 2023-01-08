import { resolve } from 'path';

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
