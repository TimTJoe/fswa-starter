import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', 
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, "./src"),
      '@pages': path.resolve(__dirname, "./src/pages"),
      '@components': path.resolve(__dirname, "./src/components"),
      '@ui': path.resolve(__dirname, "./src/components/ui"),
      '@asserts': path.resolve(__dirname, "./src/asserts"),
    }
  },
  server: {
    port: 8000,
    open: true,    
  },
});
