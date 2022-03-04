import type { Router } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import { userPermissionStore } from '@/store/modules/permission';
import { PageEnum } from '@/enums/pageEnum';

const LOGIN_PATH = PageEnum.BASE_LOGIN;
const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const userStore = useUserStore();
  const permissionStore = userPermissionStore();
  console.log(userStore, permissionStore);
  router.beforeEach((to, from, next) => {
    const token = userStore.getToken;
    // 白名单校验
    if (whitePathList.includes(to.path as PageEnum)) {
      if (to.path == LOGIN_PATH && token) {
        console.log('你应该自动登录，返回页面');
      }
      next();
      return;
    }
    // 如果token不存在
    if (!token) {
      //进入不需要权限校验页面, 需设置to.meta.ignoreAuth = true
      if (to.meta.ignoreAuth) {
        next();
        return;
      }
      //重定向登录页面
      const redirectData: {
        path: string;
        replace: boolean;
        query?: Record<string, string>;
      } = {
        path: LOGIN_PATH,
        replace: true,
      };
      if (to.path) {
        redirectData.query = {
          redirect: to.path,
        };
      }
      console.log(redirectData);
      next(redirectData);
      return;
    }
  });
}
