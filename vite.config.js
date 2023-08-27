import vueI18n from '@intlify/unplugin-vue-i18n/vite';
import vue from "@vitejs/plugin-vue";
import {fileURLToPath, URL} from "url";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      compositionOnly: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/styles/_variables.scss";
              @import "./src/styles/_mixins.scss";
            `,
      },
    },
  },
});
