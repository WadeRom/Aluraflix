/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      blue: '#1290FF',
      pink: '#DC6EBE',
      green: '#00C86F',
      white: '#FFFFFF',
      violet: '#6B5BE2',
      yellow: '#FFBA05',
      orange: '#FF8C2A',
      sky_blue: '#6BD1FF',
      dark_blue: '#0D62E0',
      moss_green: '#9CD33B',
      dark: {
        primary: '#000000E5',
        secondary: '#00000099',
        third: '##00000080',
        fourth: '#9E9E9E'
      },
      gray: {
        primary: '#C2C2C2',
        secondary: '#E5E5E5',
        third: '#F5F5F5'
      },
      danger: {
        primary: '#C62828',
        secondary: '#E53935',
        third: '#FCE7E7'
      }
    },
  },
}

