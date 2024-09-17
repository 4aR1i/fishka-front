import { createApp } from 'vue';
import { createYmaps } from 'vue-yandex-maps';
import { createPinia } from 'pinia';
import router from '@/router';
import App from '@/App.vue';

import '@/shared/styles/main.scss';

const app = createApp(App);
const pinia = createPinia();

const mapsApiKey = import.meta.env.VITE_MAPS_API_KEY;
const yMaps = createYmaps({
  apikey: mapsApiKey,
});

app.use(yMaps).use(router).use(pinia);

app.mount('#app');
