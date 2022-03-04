// 位于主框架外的页面 仍需要校验前端权限
import type { RouteRecordRaw } from 'vue-router';

export const mainOutRoutes: RouteRecordRaw[] = [];

export const mainOutRouteNames = mainOutRoutes.map(item => item.name);
