import { Persistent, BasicKeys, BasicStore } from '@/utils/cache/persistent';

export function getAuthCache<T>(key: BasicKeys) {
  const fn = Persistent.getLocal;
  return fn(key) as unknown as T;
}

export function setAuthCache(key: BasicKeys, value: BasicStore[BasicKeys]) {
  const fn = Persistent.setLocal;
  return fn(key, value);
}
