import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Runtime binaries are versioned static files under public/ort. Avoid
    // bundling a second, unreachable copy into dist/assets.
    conditions: ["onnxruntime-web-use-extern-wasm", "browser", "module", "import", "default"]
  },
  server: {
    host: "127.0.0.1",
    port: 5173
  }
});
