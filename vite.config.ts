import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// no server integration for static SPA

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
    },
  },
});
