import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Toast, { type PluginOptions } from 'vue-toastification';

import 'vue-toastification/dist/index.css';
import './assets/main.css';

const app = createApp(App);
const options: PluginOptions = {
  // You can set your default options here
};

app.use(Toast, options);
app.use(createPinia());
app.use(router);

app.mount('#app');
