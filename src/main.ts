import { createApp } from 'vue';
import './design/index.less';
import { setupStore } from './store/index';
import { setupRouter, router } from './router/index';
import { setupRouterGuard } from './router/guard/index';
import { registerGlobalComp } from './components/registerGlobalComp';

import App from './App.vue';

//Vite 在 import.meta.env对象上暴露环境变量
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.css');
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
}

bootstrap();
