import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    minify: "terser",
  },
  define: {
    __DEFINES__: "{}",
    __HMR_CONFIG_NAME__: '"import.meta.hot"',
    __BASE__: '"/"',
  },
});
