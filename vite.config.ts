import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: ['@import "@/style/variables.scss"', ""].join("\n"),
      },
    },
  },
  plugins: [vue(), vuetify()],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
