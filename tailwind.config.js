/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-primary": "#ffffff",
        "neutral-secondary-soft": "#f9fafb",
        "neutral-tertiary": "#f3f4f6",
        "default": "#e5e7eb",
        "heading": "#111827",
        "body": "#6b7280",
        "brand": "#10b981",
        "fg-brand": "#10b981",
      },
      borderRadius: {
        base: "0.5rem",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};