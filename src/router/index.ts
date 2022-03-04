import { createRouter, createWebHashHistory } from 'vue-router';
import type { App } from 'vue';

import { basicRoutes } from './routes/index';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
});

export function setupRouter(app: App) {
  app.use(router);
}
