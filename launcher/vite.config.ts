import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
  },
  plugins: [react(),  federation({
    remotes: {
      remote_registration: "http://localhost:3001/assets/remoteEntry.js",
      remote_account: "http://localhost:3002/assets/remoteEntry.js",
    },
    shared: ['react', '@chakra-ui/react']
  }),]
})
