import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Website_Hommy/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ayuda: resolve(__dirname, 'ayuda.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        profesionales: resolve(__dirname, 'profesionales.html'),
        seguridad: resolve(__dirname, 'seguridad.html'),
        precios: resolve(__dirname, 'precios.html'),
        clientes: resolve(__dirname, 'clientes.html'),
        'como-funciona': resolve(__dirname, 'como-funciona.html'),
      },
    },
  },
});
