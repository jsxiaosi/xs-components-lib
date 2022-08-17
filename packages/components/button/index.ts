import type { App } from 'vue';
import Button from './src/button.vue';
import type { SFCWithInstall } from '../../types';

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

export const IButton: SFCWithInstall<typeof Button> = Button; // 增加类型
export default IButton;

export * from './src/button.vue';
