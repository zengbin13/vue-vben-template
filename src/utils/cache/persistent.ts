// 该应用的持久化存储, 通过store字段定义接口为存储数据

import { createLocalStorage } from '@/utils/cache';
import { TOKEN_KEY, USER_INFO_KEY } from '@/enums/cacheEnum';

export interface BasicStore {
  [TOKEN_KEY]: string;
  [USER_INFO_KEY]: number;
}

export type BasicKeys = keyof BasicStore;

const ls = createLocalStorage();

export class Persistent {
  static setLocal(key: BasicKeys, value: BasicStore[BasicKeys]) {
    ls.set(key, value);
  }
  static getLocal(key: BasicKeys): BasicStore[BasicKeys] {
    return ls.get(key);
  }
  static remove(key: BasicKeys) {
    ls.remove(key);
  }
}
