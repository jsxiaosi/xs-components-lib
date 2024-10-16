import xsCom from '@xs-components/index';
import { createApp } from 'vue';
import App from './App.vue';

import '@xs-components/theme-default/index.scss';

const app = createApp(App);

app.use(xsCom);

app.mount('#app');
