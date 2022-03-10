import { EncryptionParams } from '@/utils/cipher';
import { isDevMode } from '@/utils/env';

// 系统默认缓存时间 单位秒
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// 缓存加密密码
export const cacheCipher: EncryptionParams = {
  key: '1234567812345678',
  iv: '1234567812345678',
};

// 是否使用缓存加密
export const enableStorageEncryption = !isDevMode();
