import { src, dest, series, parallel } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import consola from 'consola'
import chalk from 'chalk'
import postcss from 'gulp-postcss'
import pxtorem from 'postcss-pxtorem'

// 基础方法
import { clean, copyfont, minifontCss, config } from './gulpfile.base'

import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

// 编译 SASS
const compile = () =>
	src([
		`${config.input}*.scss`,
		...['base', 'variable'].map((name) => `!${config.input}${name}.scss`),
	])
		.pipe(sass())
		.pipe(
			postcss([
				autoprefixer({
					overrideBrowserslist: ['last 2 versions'],
				}),
				pxtorem({
					replace: true,
				}),
			])
		)
		.pipe(
			cleanCSS({}, (details) => {
				consola.success(
					`${chalk.cyan(details.name)}: ${chalk.yellow(
						details.stats.originalSize / 1000
					)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
				)
			})
		)
		.pipe(dest(config.output))

export default series(clean, parallel(compile, copyfont, minifontCss))
