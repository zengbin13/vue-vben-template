import { defineStore } from 'pinia';

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
  actions: {},
});

export function useUserStoreWithOut() {
  return useUserStore();
}
