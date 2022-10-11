import type { UserConfig } from 'vitepress';

import { mdPlugin } from './config/plugins';
import { sidebar } from './config/navigation';

import nav from './navigation/nav.json';

const config: UserConfig = {
  lang: 'zh-CN',
  title: 'xs-components-lib',
  description: 'Just playing around.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/pwa/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/pwa/favicon.ico',
        type: 'image/png',
        size: '16x16',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/pwa/apple-touch-icon.png',
        size: '180x180',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/pwa/favicon.svg',
        color: '#FFFFFF',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'script',
      {
        src: '/registerSW.js',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo2.png',
    logoSmall: '/pwa/favicon-32x32.png',
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api'],
      },
    },
    // 顶部标题栏
    nav,
    // 侧边栏
    sidebar,
  },
  markdown: {
    config: (md: markdownit) => mdPlugin(md),
  },
};

export default config;
