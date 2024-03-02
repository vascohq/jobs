import react from "@vitejs/plugin-react";
import mix from "vite-plugin-mix";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mix as any).default({
      handler: "./api.ts",
    }),
  ],
  test: {
    globals: true,
  },
});
