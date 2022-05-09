import nodeResolve from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue' // 处理vue文件
import { readdirSync, statSync } from 'fs'
import { resolve } from 'path'
import path from 'path'
const output = resolve(__dirname, '../lib')

function getAllDirbyFilename(dir, outDir = null) {
	let dirPath = path.resolve(__dirname, dir)
	let files = readdirSync(dirPath)
	let resultArr = []

	files.forEach((file) => {
		let filePath = dir + '/' + file
		let outDirName = outDir ? `${outDir}/${file}` : file

		if (/\.(js|ts)$/.test(file)) {
			if (['theme-default', 'types.ts'].includes(file)) return resultArr

			return resultArr.push({
				input: `${dirPath}/${file}`,
				external: ['vue'],
				plugins: [
					nodeResolve(),
					vue(),
					typescript({
						tsconfigOverride: {
							compilerOptions: {
								declaration: false,
							},
							exclude: ['node_modules', 'examples', 'mobile', 'tests'],
						},
						abortOnError: false,
						clean: true,
					}),
				],
				output: {
					name: 'index',
					file: `${output}/${outDir ? `${outDir}/` : ''}${file.replace(
						/.ts|.js/,
						'.js'
					)}`,
					format: 'es',
					globals: {
						vue: 'vue',
					},
				},
			})
		}

		// 继续深搜文件夹
		if (statSync(dirPath + '/' + file).isDirectory()) {
			resultArr.push(...getAllDirbyFilename(filePath, outDirName))
		}
	})

	return resultArr
}

const config = getAllDirbyFilename('../packages')

export default config
