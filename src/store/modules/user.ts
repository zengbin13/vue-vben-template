import { defineStore } from 'pinia';
import { TOKEN_KEY } from '@/enums/cacheEnum';
import { loginApi } from '@/api/user';

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
    },

    async login(params: LoginParams) {
      const res = await loginApi(params);
      console.log('login', res);
      // const { token } = res.data;
      // this.setToken(token);
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore();
}
