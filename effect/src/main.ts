import { createApp } from 'vue';
import xsCom from '@xs-components/index';
import '@xs-components/theme-default/index.scss';

import App from './App.vue';

const app = createApp(App);

app.use(xsCom);

app.mount('#app');
