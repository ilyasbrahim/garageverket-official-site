import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Simply.com serves static files and PHP, not a Node/Nitro server.
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
  },
});
