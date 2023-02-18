import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-macros/vite';

export default defineConfig({
  plugins: [
    DefineOptions({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
  ],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.tsx$/],
    },
  },
});
