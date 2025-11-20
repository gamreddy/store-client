import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsonServer from 'vite-plugin-simple-json-server';

// https://vite.dev/config/
export default defineConfig({
  baseUrl: "http://localhost:5173/",
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    jsonServer({
      delay: 500
    })
  ],
})
