// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // globale SCSS-Daten, die VOR jeder Datei eingefügt werden
        additionalData: `
          @use "sass:math";
        `,
        includePaths: [path.resolve(__dirname, "node_modules")],
      },
    },
  },
});
