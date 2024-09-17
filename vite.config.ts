import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import terser from "@rollup/plugin-terser";
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), tsconfigPaths()],
    resolve: {
      alias: {
        "@": resolve(__dirname, './src') 
      },
      dedupe: ["vue"],
    },
    server: {
      host: "localhost",
      port: 3000,
      open: true,
    },
    build: {
      assetsDir: "assets",
      outDir: `dist/${mode}`,
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        plugins: [terser()],
      },
    },
  };
});
