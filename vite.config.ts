import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import terser from '@rollup/plugin-terser';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

const ENV_PREFIX = ['VITE_'];

const relativePath = {
  env: './config',
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, relativePath.env, ENV_PREFIX);

  console.log(env);
  process.env = { ...process.env, ...env };
  return {
    plugins: [vue(), tsconfigPaths()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
      dedupe: ['vue'],
    },
    server: {
      host: 'localhost',
      port: 3000,
      open: true,
      proxy: {
        '/auth': {
          secure: false,
          changeOrigin: true,
          target: env.VITE_API_BASE_URL,
        },
      },
    },
    build: {
      assetsDir: 'assets',
      outDir: `dist/${mode}`,
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        plugins: [terser()],
      },
    },
  };
});
