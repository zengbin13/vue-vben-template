import type { GlobConfig } from '#/config';
import { getAppEnvConfig } from '@/utils/env';

export function useGlobSetting(): Readonly<GlobConfig> {
  const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL, VITE_GLOB_UPLOAD_URL } = getAppEnvConfig();
  return {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    uploadUrl: VITE_GLOB_UPLOAD_URL,
  } as Readonly<GlobConfig>;
}
