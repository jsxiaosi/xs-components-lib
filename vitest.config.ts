import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue(), vueJsx()],
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
