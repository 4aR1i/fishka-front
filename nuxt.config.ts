import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  devtools: { enabled: true },
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
    plugins: [
      {
        name: 'vite-plugin-glob-transform',
        transform(code: string, id: string) {
          if (id.includes('nuxt-icons')) {
            return code.replace(/as:\s*['"]raw['"]/g, 'query: "?raw", import: "default"');
          }
        },
      },
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
  css: ['@/assets/styles/main.scss'],
  components: [
    {
      path: '@/components',
    },
  ],
});