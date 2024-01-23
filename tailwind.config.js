/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          root: "#1D2026",
          default: "#292E37",
          higher: "#353B47",
          highest: "#474D5B",
        },
        foreground: {
          muted: "#A9A9A9",
          default: "#D9D9D9",
          higher: "#FFFFFF",
        },
        primary: {
          default: "#1A67BE",
          higher: "#1A77E2",
          highest: "#1883FF"
        },
        active: {
          default: "#F36C33",
        },
      },
    },
  },
  plugins: [],
};
