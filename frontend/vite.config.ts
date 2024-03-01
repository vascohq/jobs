import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mix from "vite-plugin-mix";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mix as any).default({
      handler: "./api.ts",
    }),
  ],
});
