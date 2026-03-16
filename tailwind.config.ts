/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./ayuda.html",
    "./nosotros.html",
    "./profesionales.html",
    "./seguridad.html",
    "./precios.html",
    "./clientes.html",
    "./como-funciona.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F47B6',
          dark: '#3D3691',
          light: '#7A74D0',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#333333',
        },
        background: '#EAE6E3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
