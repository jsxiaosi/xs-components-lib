import gulp from 'gulp'
import gulpCssmin from 'gulp-cssmin'
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
		.pipe(gulpCssmin())
		.pipe(gulp.dest(`${config.output}/fonts`))

// 删除之前css打包文件
export const clean = (done) => {
	deleteSync(
		['*.css', 'fonts'].map((name) => `${config.output}/${name}`),
		{ force: true }
	)
	done()
}
