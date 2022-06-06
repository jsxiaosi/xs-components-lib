import DefaultTheme from 'vitepress/theme'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import xiaosi from '../../../packages/index'
import '../../../packages/theme-default/index.scss'
import type { Theme } from 'vitepress'

export default <Theme>{
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components
		app.component('MyGlobalComponent' /* ... */)
		app.use(xiaosi)
		app.component('Demo', Demo)
		app.component('DemoBlock', DemoBlock)
	},
}
