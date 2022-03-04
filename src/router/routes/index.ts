import type { RouteRecordRaw } from 'vue-router';
import { PageEnum } from '../../enums/pageEnum';

//
import { mainOutRoutes } from './mainOut';
// 主页 登录页
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};
export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: 'Login',
  },
};

// Basic routing without permission
export const basicRoutes = [RootRoute, LoginRoute, ...mainOutRoutes];
