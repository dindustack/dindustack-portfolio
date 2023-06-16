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
      colors: {
        "gray-300": "#8C8C8C",
        "gray-500": "#565656",
        "gray-900": "#202020",
      },
      fontFamily: {
        eastman: ["Eastman Regular", "sans-serif"],
        "eastman-medium": ["Eastman Medium", "sans-serif"],
        "eastman-offset": ["Eastman Regular Offset", "sans-serif"],
        "eastman-bold": ["Eastman Bold", "sans-serif"],
        migra: ["Migra", "sans-serif"],
        "migra-extrabold": ["Migra Extrabold", "sans-serif"],
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
          background: "#8C8C8C",
          fontSize: "2rem",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
        },
        ".about-first-text": {
          background: "#8C8C8C",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
        },

        ".hero-text": {
          "&::after": {
            content: '""',
            display: "inline-block",
            border: "1px solid #202020",
            width: "100px",
            margin: "0 1.3rem 0.625rem 1.3125rem",
            transform: "translateY(-3px)",
          },
        },

        ".about-title": {
          flex: "0 0 15px",
          minWidth: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },

        ".hero-image-container": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },

        ".hero-image": {
          position: "relative",
          width: "19rem",
          height: "19rem",
          objectFit: "contain",
          maxWidth: "100%",
          borderRadius: "100%",
          overflow: "hidden",
          cursor: "pointer",
          // border: "2px solid #202020",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          boxShadow: " 0px 4px 32px rgba(0, 0, 0, 0.12)",

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
          },
        },

        ".marquee-img": {
          display: "block",
          position: "absolute",
          top: "50%",
          right: "0",
          width: "2.5rem",
          height: "2.5rem",
          transform: "translateY(-50%)",
          animation: "rotate 8s linear infinite",

          "@screen md": {
            width: "3rem",
            height: "3rem",
          },
        },

        "@keyframes rotate": {
          from: {
            transform: "translateY(-50%) rotate(0)",
          },
          to: {
            transform: "translateY(-50%) rotate(360deg)",
          },
        },

        ".sidebar-item": {
          transform: " rotate(-90deg)",
          color: "#565656",
          fontSize: "0.875rem",
          cursor: "pointer",
          textTransform: "uppercase",
          fontFamily: "Eastman Regular",

          ".active": {
            color: "#202020",
            fontFamily: "Eastman Bold",
          },

          "&:hover": {
            color: "#202020",
          },

          "&:focus": {
            color: "#202020",
            fontFamily: "Eastman Bold",
          },
        },
      });
    }),
  ],
};
