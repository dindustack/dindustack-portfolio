/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument Extended"],
        migra: ["Migra"],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme("translate") }
      );
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".about-text": {
          background:
            "linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(37, 37, 37) 50%)",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
        },
        ".about-first-text": {
          background:
            "linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(37, 37, 37) 50%)",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
        },
        ".hero-social-link": {
          fontFamily: "Migra",
          fontSize: "1.25rem",
          lineHeight: "1",

          "&:hover": {
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "4px",
          },
        },
        // 
        ".hero-image": {
          position: "relative",
          width: "19rem",
          height: "19rem",
          maxWidth: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid white",
          objectFit: "cover",

          "@screen md": {
            width: "22rem",
            height: "22rem",
          },

          "@screen xl": {
            width: "29rem",
            height: "29rem",
          },

          "& canvas": {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          },
        }
      });
    }),
  ],
};
