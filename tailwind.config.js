/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./slices/**/*.vue",
    // "./plugins/**/*.{js,ts,mjs}",
    // "./composables/**/*.{js,ts,mjs}",
    // "./utils/**/*.{js,ts,mjs}",
    // "./{A,a}pp.{vue}",
    // "./{E,e}rror.{vue}",
    // "./app.config.{js,ts,mjs}",
    // "./app/spa-loading-template.html"
  ],
  theme: {
    extend: {
      colors: {
        'shade-1': '#3392c5',
        'shade-2': '#66AFD1',
        'shade-3': '#99C7DD',
        'shade-4': '#CCEFF0',
      },
      transitionTimingFunction: {
        'bouncy': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Alias for ease-in-out-back
        'smooth-in': 'cubic-bezier(0.12, 0, 0.39, 0)', // Alias for ease-in-sine
        'smooth-out': 'cubic-bezier(0.61, 1, 0.88, 1)', // Alias for ease-out-sine
        'snappy': 'cubic-bezier(0.5, 1, 0.89, 1)', // Alias for ease-out-quad
      },
    },
  },
  plugins: [],
}

