import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": "https://tdjayadeerav2.vercel.app",
    //   "/api": "http://localhost:3000/",
    // }  
  } ,
  plugins: [react()],
})
