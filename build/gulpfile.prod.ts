import { src, dest, series, parallel } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cssmin from 'gulp-cssmin'
import path from 'path'

// 基础方法
import { clean, copyfont, minifontCss, config } from './gulpfile.base'

import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

// 编译 SASS
const compile = () =>
	src(path.resolve(__dirname, `${config.input}/*.scss`))
		.pipe(sass())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 2 versions'],
			})
		)
		.pipe(cssmin())
		.pipe(dest(config.output))

export default series(clean, parallel(compile, copyfont, minifontCss))
