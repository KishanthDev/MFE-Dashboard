import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

/**
 * 🔥 MFE TEMPLATE CONFIG
 *
 * 👉 Clone this project and ONLY change:
 * 1. name (unique per MFE)
 * 2. exposes (component entry)
 * 3. preview.port (unique per MFE)
 */

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Add Tailwind plugin

    federation({
      /**
       * 🔴 CHANGE THIS → unique name for your micro frontend
       * Example: "profile", "dashboard", "orders"
       */
      name: "remote_app",

      /**
       * ⚠️ DO NOT CHANGE (standard filename for federation)
       */
      filename: "remoteEntry.js",

      exposes: {
        /**
         * 🔴 CHANGE THIS → exposed module name
         * Must match host import:
         *
         * host: import("profile/Profile")
         * remote: "./Profile"
         */
        "./Dashboard": "./src/MfeDashboard.tsx",

        /**
         * 👉 You can expose multiple components:
         * "./Header": "./src/components/Header.tsx",
         */
      },

      /**
       * ⚠️ KEEP THIS SIMPLE (important for stability)
       */
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    target: "esnext",

    /**
     * ⚠️ REQUIRED for federation to work properly
     */
    cssCodeSplit: false,
    modulePreload: false,
  },

  /**
   * 🔴 CHANGE PORT per MFE
   * Example:
   * profile → 3001
   * dashboard → 3002
   */
  preview: {
    port: 3001,
    cors: true,
  },
});