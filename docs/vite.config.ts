import path from 'path'
import type { UserConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { projRoot } from './.vitepress/config/paths'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

export default (): UserConfig => {
	console.log('插入配置')
	return {
		resolve: {
			alias: [
				{
					find: '~/',
					replacement: `${path.resolve(__dirname, './.vitepress')}/`,
				},
				{
					find: '@xsComponents',
					replacement: `${path.resolve(projRoot, 'packages')}/`,
				},
			],
		},
		server: {
			host: true,
		},
		plugins: [
			Inspect(), // only applies in dev mode
			MarkdownTransform(),
		],
	}
}
