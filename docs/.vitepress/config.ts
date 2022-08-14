import type { UserConfig } from 'vitepress';

import { mdPlugin } from './config/plugins';

function getDemoSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'buttom',
          link: '/components/button',
        },
        {
          text: 'admin',
          link: '/components/admin',
        },
      ],
    },
  ];
}

const config: UserConfig = {
  lang: 'zh-CN',
  title: 'XiaoSiComponents',
  description: 'Just playing around.',
  themeConfig: {
    logo: '/logo2.png',
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
        activeMatch: '/components/',
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
    config: (md: markdownit) => mdPlugin(md),
    // config: (md) => {
    // 	// const { demoBlockPlugin } = require('vitepress-theme-demoblock')
    // 	// md.use(demoBlockPlugin)
    // },
  },
  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: {
          props: [],
          needRuntime: true,
        },
      },
    },
  },
};

export default config;
