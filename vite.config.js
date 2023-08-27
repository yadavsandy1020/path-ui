import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    sourcemap: false, // Ensure sourcemap is set to false
  },
  server: {
    port: 8081,
  },
});
