export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service upload url
  VITE_GLOB_UPLOAD_URL?: string;
}

export interface GlobConfig {
  title: string;
  apiUrl: string;
  uploadUrl?: string;
}
