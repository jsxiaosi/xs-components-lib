import gulp from 'gulp'
import cleanCSS from 'gulp-clean-css'
import consola from 'consola'
import chalk from 'chalk'
import { deleteSync } from 'del'

// 打包配置
export const config = {
	input: '../packages/theme-default',
	output: '../lib/theme-default',
}

// 复制字体
export const copyfont = () =>
	gulp
		.src([`${config.input}fonts/*`, `!${config.input}fonts/*.css`])
		.pipe(gulp.dest(`${config.output}/fonts`))

// 压缩font 里的 CSS
export const minifontCss = () =>
	gulp
		.src(`${config.input}fonts/*.css`)
		.pipe(
			cleanCSS({}, (details) => {
				consola.success(
					`${chalk.cyan(details.name)}: ${chalk.yellow(
						details.stats.originalSize / 1000
					)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
				)
			})
		)
		.pipe(gulp.dest(`${config.output}/fonts`))

// 删除之前css打包文件
export const clean = (done) => {
	deleteSync(
		['*.css', 'fonts'].map((name) => `${config.output}/${name}`),
		{ force: true }
	)
	done()
}
