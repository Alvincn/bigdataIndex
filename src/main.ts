import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'virtual:svg-icons-register';
import 'element-plus/dist/index.css';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import '@/styles/index.scss';

// 引入animate.css
import 'animate.css';
// 这块一定要加,否者会有部分动画无法执行
import 'animate.css/animate.compat.css';
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

// 引入路由
import router from './router';
app.use(router);
// 引入全局组件
import global from '@/components/index.ts';
app.use(global);
app.mount('#app');
