/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Rojo coreano tradicional (Dancheong / rojo bong-sam)
        hanbok: {
          50: "#fdf3f2",
          100: "#fce4e1",
          200: "#facec9",
          300: "#f3acaa",
          400: "#e87f7c",
          500: "#d85a55",
          600: "#c43f3c",
          700: "#a53030",
          800: "#872c2c",
          900: "#6f2a2a",
          950: "#3d1311",
        },
        // Azul coreano (Dong-Ah / índigo tradicional)
        dong: {
          50: "#f0f5ff",
          100: "#e0eaff",
          200: "#c7d9fe",
          300: "#a4c0fc",
          400: "#7a9df8",
          500: "#5b7af1",
          600: "#475ce7",
          700: "#3a4ad0",
          800: "#333ea8",
          900: "#2f3c85",
          950: "#1e2350",
        },
        // Negro coreano (tinta)
        sumi: {
          50: "#f6f6f4",
          100: "#e9e9e4",
          200: "#d3d3ca",
          300: "#b3b2a6",
          400: "#8e8d7e",
          500: "#72715f",
          600: "#5b5a4b",
          700: "#494840",
          800: "#3d3c36",
          900: "#333228",
          950: "#1c1b16",
        },
        // Dorado/crema de arroz (acento cálido)
        rice: {
          50: "#fdfbf3",
          100: "#faf3dc",
          200: "#f4e6b5",
          300: "#ecd583",
          400: "#e3c04f",
          500: "#d9a82f",
          600: "#bf8b23",
          700: "#9d6820",
          800: "#805221",
          900: "#6b451f",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', "Inter", "system-ui", "sans-serif"],
        serif: ['"Noto Serif KR"', "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
