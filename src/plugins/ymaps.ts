import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import { createYmaps } from 'vue-yandex-maps';

export default defineNuxtPlugin((nuxtApp) => {
  const mapApiKey = useRuntimeConfig().public.mapApiKey as string;
  const yMaps = createYmaps({
    apikey: mapApiKey,
  });

  nuxtApp.vueApp.use(yMaps);
});
