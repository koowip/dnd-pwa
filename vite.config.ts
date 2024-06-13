import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "SpellBook",
        short_name: "SpellBook",
        description: "Pat's Shitty SpellBook App",
        theme_color: "#FFD059",
        icons: [
          {
            src: "/nat20.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/nat20_resized_transparent.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
