/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'light-pink': '#ffbdb6',
      'coral-pink': '#ff9c90',
      'orange': '#ff4500',
      'red-orange': '#e63610',
      'burnt-orange': '#801B05',
      'light-green': '#61c871',
      'leaf-green': '#399d49',
      'dark-periwinkle': '#7092f3',
      'cheery-pink': '#f87f8b',
      'dark-mauve': '#c85564',
      'sky-blue': '#8AB7EA'
    },
    fontFamily: {
      'main': ['Monaco', 'Monaco', 'main'],
      'sans': ['Menlo', 'Menlo', 'sans']
    },
  },
};
