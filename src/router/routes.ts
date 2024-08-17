// 对外暴露配置路由
import {SESSIONSTORAGE} from "@/utils/useStore";

export const constantRoute = [
  {
    // 登录
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    // 404路由
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    // 如果上边都没匹配上
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
];
