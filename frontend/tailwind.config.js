/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1E3A8A', // Deep Blue
        'brand-secondary': {
          'DEFAULT': '#6B7280', // Gray
          'light': '#9CA3AF',   // Light Gray
          'dark': '#374151',    // Dark Gray
        },
        'brand-accent': '#F59E0B',   // Amber
        'brand-danger': '#DC2626',   // Red
        'brand-success': '#10B981',  // Green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
