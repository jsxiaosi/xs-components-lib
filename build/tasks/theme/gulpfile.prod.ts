import path from 'path';
import chalk from 'chalk';
import consola from 'consola';
import { dest, parallel, src } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

import gulpSass from 'gulp-sass';
// 基础方法
import dartSass from 'sass';
import { config, copyfont, minifontCss } from './gulpfile.base';

const sass = gulpSass(dartSass);

// 编译 SASS
const compile = () =>
  src(path.resolve(__dirname, `${config.input}/*.scss`))
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(
      cleanCSS({}, details => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`,
        );
      }),
    )
    .pipe(dest(config.output));

export const buildTheme = parallel(compile, copyfont, minifontCss);
