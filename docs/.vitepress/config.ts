import type { UserConfig } from 'vitepress'

function getDemoSidebar() {
	return [
		{
			text: '组件',
			children: [
				{
					text: 'buttom',
					link: '/components/button',
				},
			],
		},
	]
}

const config: UserConfig = {
	lang: 'zh-CN',
	title: 'XiaoSiComponents',
	description: 'Just playing around.',
	themeConfig: {
		// 展示搜索框
		algolia: {
			appKey: '',
			indexName: '',
			searchParameters: {
				faeFilters: ['tags:guide,api'],
			},
		},
		nav: [
			{
				text: '首页',
				link: '/',
			},
			{
				text: '组件',
				link: '/components/button',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/SuperCuteXiaoSi/xiaosiCommitLib',
			},
		],
		// 侧边栏
		sidebar: {
			'/components/': getDemoSidebar(),
		},
	},
	markdown: {
		config: (md) => {
			const { demoBlockPlugin } = require('vitepress-theme-demoblock')
			md.use(demoBlockPlugin)
		},
	},
}

export default config
