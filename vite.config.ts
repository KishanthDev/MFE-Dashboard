import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 

    federation({
      name: "remote_app",
      filename: "remoteEntry.js",

      exposes: {
        "./Dashboard": "./src/MfeDashboard.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    target: "esnext",
    cssCodeSplit: false,
    modulePreload: false,
  },
  preview: {
    port: 3001,
    cors: true,
  },
});