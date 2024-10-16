import { deleteSync } from 'del';
import { parallel, series } from 'gulp';
import type { TaskFunction } from 'undertaker';
import { buildGlobalTypeFile } from './tasks/buildGlobalFile';
import { buildCdnModules, buildNodeModules } from './tasks/buildModules';
import { copyComponentsPackages, copyThemeCdn, copyTypesDefinitions } from './tasks/copyFile';
import { buildTheme } from './tasks/theme/gulpfile.prod';
import { generateTypesDefinitions } from './tasks/typeExport';
import { buildOutput } from './utils/paths';

export const clean: TaskFunction = done => {
  deleteSync(buildOutput, { force: true });
  done();
};

export default series(
  clean,
  parallel(buildNodeModules, buildCdnModules, generateTypesDefinitions),
  parallel(buildTheme, buildGlobalTypeFile),
  parallel(copyTypesDefinitions, copyThemeCdn, copyComponentsPackages),
);
