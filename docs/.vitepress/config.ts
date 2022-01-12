module.exports = {
	lang: 'zh-CN',
	title: 'vue3',
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
				text: 'Components',
				link: '/components/button',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/lxKylin/vitepressdemo',
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
