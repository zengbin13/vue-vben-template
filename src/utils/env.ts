import type { GlobEnvConfig } from '#/config';

export const devMode = 'development';
export const prodMode = 'production';

export function getEnv(): string {
  return import.meta.env.MODE;
}

export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

export function isProdMode(): boolean {
  return import.meta.env.PROD;
}

/**
 * @description: 获取站点环境变量配置
 */
export function getAppEnvConfig(): GlobEnvConfig {
  const { VITE_GLOB_APP_TITLE, VITE_GLOB_UPLOAD_URL, VITE_GLOB_API_URL } = import.meta.env;
  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_UPLOAD_URL,
  } as unknown as GlobEnvConfig;
}
