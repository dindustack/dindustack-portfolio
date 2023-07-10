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
        neue: ["Neue Machina", "sans-serif"],
        "neue-light": ["Neue Machina Light", "sans-serif"],
        "neue-ultrabold": ["Neue Machina Ultrabold", "sans-serif"],
        migra: ["Migra Extrabold", "serif"],
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
          fontSize: "0.875rem",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",

          "@screen md": {
            fontSize: "2rem",
          },
        },

        ".about-first-text": {
          background: "#8C8C8C",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
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
          color: "#565656",
          fontSize: "0.875rem",
          cursor: "pointer",
          textTransform: "uppercase",
          fontFamily: "Eastman Regular",

          "&:hover": {
            color: "#202020",
          },

          "&:focus": {
            color: "#202020",
            fontFamily: "Eastman Bold",
          },
        },

        ".sidebar-item-active": {
          color: "#202020",
          fontFamily: "Eastman Bold",
          fontSize: "0.875rem",
          cursor: "pointer",
          textTransform: "uppercase",

          "&:hover": {
            color: "#202020",
          },

          "&:focus": {
            color: "#202020",
            fontFamily: "Eastman Bold",
          },
        },

        ".skillset-title": {
          textTransform: "capitalize",
          fontFamily: "Neue Machina Ultrabold",
          fontWeight: 800,
          fontSize: "3.5rem",
          display: "flex",
          alignItems: "center",
          color: "#202020",

          "@media (max-width: 768px)": {
            fontSize: "2.25rem",
            "&::after": {
              content: '""',
              borderTop: "1px solid #8C8C8C",
              flex: "auto",
              marginLeft: "3rem",
            },
          },
        },

        ".about-title": {
          textTransform: "capitalize",
          fontFamily: "Neue Machina Ultrabold",
          fontWeight: 800,
          fontSize: "3.5rem",
          display: "flex",
          alignItems: "center",
          color: "#202020",

          "@media (max-width: 768px)": {
            fontSize: "2.25rem",
            "&::after": {
              content: '""',
              borderTop: "1px solid #8C8C8C",
              flex: "auto",
              marginLeft: "3rem",
            },
          },
        },

        ".navbar-icon-shadow": {
          boxShadow: "0px 8px 13px -3px rgba(0, 0, 0, 0.16);",
        },

        ".navbar-item-active": {
          color: "#202020",
          fontFamily: "Neue Machina",
        },

        ".navbar-item": {
          color: "#565656",
          fontFamily: "Neue Machina Light",
        },

        ".indicator": {
          "@media (max-width: 425px)": {
            left: "3.25rem",
          },

          "@media (min-width: 425px)": {
            left: "3.78rem",
          },
        },
      });
    }),
  ],
};
