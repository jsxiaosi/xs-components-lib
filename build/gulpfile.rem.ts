import { src, dest, series, parallel } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cssmin from 'gulp-cssmin'
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
		.pipe(cssmin())
		.pipe(dest(config.output))

export default series(clean, parallel(compile, copyfont, minifontCss))
