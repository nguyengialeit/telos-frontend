/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './examples/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "cool-gray": {
          900: "#111827",
        },
        red: {
          100: "#asdasd",
          900: "#asdasd",
        },
        gray: {
          100: "#F4F5F7",
          900: "#18191F"
        },
        purple: {
          400: "#8C30F5",
        }
      },
      fontSize: {
        h1: ["72px", "98px"],
        h2: ["48px", "64px"],
        h3: ["40px", "54px"],
        h4: ["28px", "40px"],
        h6: ["20px", "30px"],
        lead1: ["18px", "32px"],
        subtitle2: ["18px", "28px"],
        body1: ["16px", "26px"],
        body2: ["14px", "24px"],
        label: ["14px", "20px"]
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [],
}

