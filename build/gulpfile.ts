import { series, parallel } from 'gulp';
import type { TaskFunction } from 'undertaker';
import { deleteSync } from 'del';
import { buildCdnModules, buildNodeModules } from './tasks/buildModules';
import { buildOutput } from './utils/paths';
import { generateTypesDefinitions } from './tasks/typeExport';
import { buildTheme } from './tasks/theme/gulpfile.prod';
import { copyComponentsPackages, copyThemeCdn, copyTypesDefinitions } from './tasks/copyFile';

export const clean: TaskFunction = (done) => {
  deleteSync(buildOutput, { force: true });
  done();
};

export default series(
  clean,
  buildTheme,
  parallel(buildNodeModules, buildCdnModules, generateTypesDefinitions),
  parallel(copyTypesDefinitions, copyThemeCdn, copyComponentsPackages),
);
