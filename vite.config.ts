import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/Dashboard.tsx",
      },
      // Simplified sharing to avoid strict version crashes
      shared: ["react", "react-dom"], 
    }),
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
    modulePreload: false, // 🔥 Fixes compatibility with newer Vite versions
  },
  preview: { // 🔥 Moved here, outside of the plugins array!
    port: 3001,
    cors: true,
  },
});