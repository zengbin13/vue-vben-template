import { defineStore } from 'pinia';
import { TOKEN_KEY } from '@/enums/cacheEnum';
import { loginApi } from '@/api/user';
import { setAuthCache } from '@/utils/auth';

import type { LoginParams } from '#/store';

export const useUserStore = defineStore('app-user', {
  state: () => {
    return {
      userInfo: null,
      token: '',
      roleList: [],
    };
  },
  getters: {
    getToken(): string {
      return this.token;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      setAuthCache(TOKEN_KEY, token);
    },
    /**
     * @description: 用户登录，保存token、用户信息、权限等
     */
    async login(params: LoginParams) {
      const res = await loginApi(params);
      console.log('login', res);
      const { token } = res.result;
      this.setToken(token);
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore();
}
