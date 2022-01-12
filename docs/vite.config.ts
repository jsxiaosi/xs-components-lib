import path from 'path'
import { UserConfig, ConfigEnv } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default (configEnv: ConfigEnv): UserConfig => {
	console.log('插入配置')
	return {
		server: {
			host: true,
		},
		plugins: [
			Inspect(), // only applies in dev mode
		],
	}
}
