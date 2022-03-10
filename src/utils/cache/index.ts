import { createStorage as create, createStorageParams } from './storageCache';
import { DEFAULT_CACHE_TIME, enableStorageEncryption } from '@/settings/encryptionSetting';

export type Options = Partial<createStorageParams>;

export const createOptions = (storage: Storage, options: Options = {}): Options => {
  return {
    hasEncrypt: enableStorageEncryption,
    prefixKey: 'vben_',
    ...options,
    storage,
  };
};

export const WebStorage = create(createOptions(sessionStorage));

export const createSessionStorage = () => {
  return create(createOptions(sessionStorage, { timeout: DEFAULT_CACHE_TIME }));
};

export const createLocalStorage = () => {
  return create(createOptions(localStorage, { timeout: DEFAULT_CACHE_TIME }));
};
