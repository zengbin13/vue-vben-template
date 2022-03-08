import { defineStore } from 'pinia';
// import { UserInfo } from '../../types/store';
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
    login(params: LoginParams): void {
      console.log('login', params);
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore();
}
