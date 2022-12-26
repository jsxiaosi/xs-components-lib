import type { App, Plugin } from 'vue';

import { IButton } from './components/button';

const component = [IButton] as Plugin[];

export default function (app: App) {
  component.forEach((i) => app.use(i));
}
