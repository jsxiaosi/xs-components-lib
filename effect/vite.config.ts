import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

console.log(`${path.resolve(__dirname, '../dist/xs-components/es')}/`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    // 服务器端口号
    port: 3001,
  },
  resolve: {
    alias: [
      {
        find: '@dist',
        replacement: `${path.resolve(__dirname, '../dist/xs-components/es')}/`,
      },
      {
        find: '@xs-components',
        replacement: `${path.resolve(__dirname, '../packages')}/`,
      },
    ],
  },
});
