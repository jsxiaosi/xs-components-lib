const { src, dest, series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer')
const cssmin = require('gulp-cssmin')
const postcss = require('gulp-postcss')
const pxtorem = require('postcss-pxtorem')
const {
	clean,
	copyfont,
	minifontCss,
	config: { input, output },
} = require('./gulpfile.base') // 基础方法
// 编译 SASS
const compile = () =>
	src([
		`${input}*.scss`,
		...['base', 'variable'].map((name) => `!${input}${name}.scss`),
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
		.pipe(dest(output))

exports.build = series(clean, parallel(compile, copyfont, minifontCss))
