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
    __SERVER_HOST__: '"localhost"',
    __HMR_PROTOCOL__: "null",
    __HMR_HOSTNAME__: "null",
    __HMR_PORT__: "null",
    __HMR_DIRECT_TARGET__: "null",
    __HMR_BASE__: '"/"',
    __HMR_TIMEOUT__: "30000",
    __HMR_ENABLE_OVERLAY__: "false",
  },
});
