import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  build: {
    rollupOptions: {
      external: [
        "@aws-sdk/credential-provider-login",
        "@aws-sdk/credential-provider-process",
        "@aws-sdk/credential-provider-ini",
        "@aws-sdk/credential-provider-node",
        "@smithy/credential-provider-imds",
        "@aws-sdk/token-providers",
      ],
    },
  },
});
