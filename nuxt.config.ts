import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', 'nuxt-icons'],
  srcDir: 'src/',
  runtimeConfig: {
    public: {
      mapApiKey: process.env.VITE_MAP_API_KEY,
    },
  },
  vite: {
    ssr: {
      noExternal: ['vue-yandex-maps'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_variables.scss";`,
        },
      },
    },
  },
  css: ['@/assets/styles/styles.scss'],
});
