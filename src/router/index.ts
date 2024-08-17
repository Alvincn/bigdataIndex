// 通过vue-router插件实现模板路由配置
import {RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import { constantRoute } from './routes';
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoute as RouteRecordRaw[],
  // 滚动行为
  scrollBehavior(to: any, from: any, savedPosition: any) {
    return { left: 0, top: 0 };
  },
});

export default router;
