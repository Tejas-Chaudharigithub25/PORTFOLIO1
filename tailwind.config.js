/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // if App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}",   // if your project has `src/`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
