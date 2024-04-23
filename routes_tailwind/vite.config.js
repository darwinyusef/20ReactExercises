import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config();

const datosExpress = {
  name: "pepito",
  age: 35
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // Permite enviar strings
    __GIPHYKEY__: `"${process.env.GIPHY_KEY}"`,
    // permite enviar objetos
    __PEPITO__: datosExpress
  },
  plugins: [react()],
})
