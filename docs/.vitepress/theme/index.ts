import DefaultTheme from 'vitepress/theme'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import './styles/vars.css'
import components from '../../../packages/index'
import '../../../packages/theme-default/index.scss'
import type { Theme } from 'vitepress'

export default <Theme>{
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components
		app.use(components)
		app.component('Demo', Demo)
		app.component('DemoBlock', DemoBlock)
	},
}
