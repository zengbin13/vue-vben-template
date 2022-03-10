import { createApp } from 'vue';
import './design/index.less';
import { setupStore } from './store/index';
import { setupRouter, router } from './router/index';
import { setupRouterGuard } from './router/guard/index';
import { registerGlobalComp } from './components/registerGlobalComp';

import App from './App.vue';

import 'element-plus/dist/index.css';

//Vite 在 import.meta.env对象上暴露环境变量
// if (import.meta.env.DEV) {
//   import('element-plus/dist/index.css');
// }

import { createStorage } from '@/utils/cache/storageCache';

function test() {
  const storage = createStorage({});
  storage.set('xxx', '11111', 10);
  setTimeout(() => {
    const a = storage.get('xxx');
    console.log(a, 3);
  }, 3000);
  setTimeout(() => {
    const a = storage.get('xxx');
    console.log(a, 15);
  }, 15000);
}

async function bootstrap() {
  const app = createApp(App);
  // Configure store
  setupStore(app);
  // Configure router
  setupRouter(app);
  // router-guard
  setupRouterGuard(router);
  //注册全局组件
  registerGlobalComp(app);
  app.mount('#app');
  test();
}

bootstrap();
