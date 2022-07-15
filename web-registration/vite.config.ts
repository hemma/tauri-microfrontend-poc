import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
  },
  server: {
    port: 3001,
  },
  plugins: [react(), federation({
    filename: "remoteEntry.js",
    exposes: {
      "./Registration": "./src/pages/Registration"
    },
    shared: ['react', '@chakra-ui/react']
  }),]
})
