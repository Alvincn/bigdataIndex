import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
export default defineConfig(({ command }) => {
  return {
    base:'./',
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        // 以后的svg图标都放在 src/assets/icons 中
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    // scss 全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    optimizeDeps: {
      include: ['wow.js', 'animate.css'],
    },
    server: {
      '/api': {
        target: 'http://43.143.242.68:8089',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  };
});
