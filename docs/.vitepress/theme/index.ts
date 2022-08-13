import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import Demo from '../components/v-demo.vue'
import './styles/vars.css'

import XsComponents from '@xsComponents/index'
import '@xsComponents/theme-default/index.scss'

export default <Theme>{
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components

		app.use(XsComponents)
		app.component('Demo', Demo)
	},
}
