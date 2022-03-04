import { defineStore } from 'pinia';

export const userPermissionStore = defineStore('app-permission', {
  state: () => {
    return {
      permCodeList: [],
    };
  },
  getters: {},
  actions: {},
});
