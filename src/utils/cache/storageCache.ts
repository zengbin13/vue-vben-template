import { EncryptionParams } from '../cipher';
import { cacheCipher } from '@/settings/encryptionSetting';

export interface createStorageParams extends EncryptionParams {
  storage: Storage;
  prefixKey: string;
  hasEncrypt: boolean;
  timeout?: number | null;
}

export const createStorage = ({
  storage = sessionStorage,
  prefixKey = '',
  hasEncrypt = true,
  timeout = null,
  key = cacheCipher.key,
  iv = cacheCipher.iv,
}: Partial<createStorageParams>) => {
  class WebStorage {
    private storage: Storage;
    private prefixKey: string;
    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
    }
    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toLocaleUpperCase();
    }
    set(key: string, value: any, expire: number | null = timeout) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        expire: expire && Date.now() + expire * 1000,
      });
      this.storage.setItem(this.getKey(key), stringData);
    }
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;
      try {
        const { value, expire } = JSON.parse(val);
        if (expire == null || expire >= Date.now()) {
          return value;
        }
        this.remove(key);
      } catch (error) {
        return def;
      }
    }
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }
    clear(): void {
      this.storage.clear();
    }
  }
  return new WebStorage();
};
