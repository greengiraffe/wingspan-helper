import {fileURLToPath, URL} from "url";
import {defineConfig} from 'vite';
import {createVuePlugin as vue} from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
})
