import path from 'path';
import { src, dest, parallel } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import consola from 'consola';
import chalk from 'chalk';

// 基础方法
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { copyfont, minifontCss, config } from './gulpfile.base';

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
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`,
        );
      }),
    )
    .pipe(dest(config.output));

export const buildTheme = parallel(compile, copyfont, minifontCss);
