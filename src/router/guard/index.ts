import type { Router } from 'vue-router';
import { createPermissionGuard } from './permissionGuard';

//对路由进行守卫
export function setupRouterGuard(router: Router) {
  createPageGuard(router);
  createPermissionGuard(router);
}
/**
 * Hooks for handling page state
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();
  router.beforeEach(to => {
    to.meta.loaded = !!loadedPageMap.get(to.path);
    return true;
  });
  router.afterEach(to => {
    loadedPageMap.set(to.path, true);
  });
}
