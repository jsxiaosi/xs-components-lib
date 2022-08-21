import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import Demo from '../components/v-demo.vue';
import '../styles/app.scss';

import xsComponents from '@xs-components/index';
import '@xs-components/theme-default/index.scss';

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(xsComponents);
    app.component('Demo', Demo);
  },
};
