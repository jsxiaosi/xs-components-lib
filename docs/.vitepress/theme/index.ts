import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import xsComponents from '@xs-components/index';
import '@xs-components/theme-default/index.scss';

import Demo from '../components/v-demo.vue';
import '../styles/app.scss';

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(xsComponents);
    app.component('Demo', Demo);
  },
};
