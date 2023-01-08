import type { App, Plugin } from 'vue';

import { IButton } from './components/button';

const component = [IButton] as Plugin[];

export const install = function (app: App) {
  component.forEach((i) => app.use(i));
};

export default {
  install,
};
