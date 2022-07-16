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
    port: 3002,
  },
  plugins: [react(), federation({
    filename: "remoteEntry.js",
    exposes: {
      "./Account": "./src/pages/Account",
      "./Login": "./src/pages/Login"
    },
    shared: ['react', '@chakra-ui/react']
  }),]
})
