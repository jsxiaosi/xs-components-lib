import path from 'path';
import type { UserConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform';

export default (): UserConfig => {
  return {
    resolve: {
      alias: [
        {
          find: '~/',
          replacement: `${path.resolve(__dirname, './.vitepress')}/`,
        },
        {
          find: '@xs-components',
          replacement: `${path.resolve(__dirname, '../packages')}/`,
        },
      ],
    },
    server: {
      host: true,
    },
    plugins: [
      Inspect(), // only applies in dev mode
      MarkdownTransform(),
      DefineOptions(),
    ],
  };
};
