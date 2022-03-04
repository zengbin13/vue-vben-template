import type { App } from 'vue';
// 全局注册antd app.use(Antd);
// import Antd from 'ant-design-vue';

// 局部导入组件
import { Button, Input, Layout } from 'ant-design-vue';
export function registerGlobalComp(app: App) {
  app.use(Button).use(Input).use(Layout);
}
