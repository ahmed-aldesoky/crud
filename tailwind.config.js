/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite/**/*.js"
  ],
  // purge: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    fontFamily: {},
    // screens: {
    //   sm: "640px", // Small screens
    //   md: "768px", // Medium screens
    //   lg: "1024px", // Large screens
    //   xl: "1480px", // Extra large screens
    // },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1596px",
    },

    container: {
      padding: "1.75rem",
      "max-width": {
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1460px",
        "2xl": "1596px",
      },
    },
    // fontSize: {
    //   sm: "0.938rem",
    //   base: "1rem",
    //   medium: "1.125rem",
    //   l: "3.76rem",
    //   xl: "2.313rem",
    //   xxl: "4.375rem",
    //   "3xl": "5.75rem",
    // },
    colors: {
      "default-white": "rgba(255, 255, 255, 1)",
      "default-black": "rgba(0, 0, 0, 1) ",
      "white-dark": "rgba(242, 242, 242, 1)",
      main: "rgba(233, 154, 0, 1)",
      "main-light": "#FFF5E3",
      "main-light2": "#FFFAF1",
      "main-dark ": "rgba(211, 109, 41, 1)",
      "secondary-dark": "rgba(127, 127, 127, 1)",
      "secondary-light": "#DADADA",
      "secondary-main": "#F2F2F2",

      // main: " #2B2E76",
      // "main-dark": "#080A44",
      // "main-light": "rgba(217, 217, 217, 0.20)",
      // secondary: "#F16021",
      // white: "#fff",
      // transparent: "transparent",
      // "main-light": "#023662",
      // "red-light": "rgb(255, 69, 96)",
      // "blue-light": "rgb(0, 143, 251)",
      // "green-light": "rgb(0, 227, 150)",
      // "orange-light": "rgb(254, 176, 25)",
    },
    borderRadius: {
      none: "0",
      base: "0.625rem",
      xl: "1.125rem",
      "3xl": "1.25rem",
      "4xl": "1.5rem",
      "5xl": "2.5rem",
      "6xl": "3.125rem ",
      full: "100%",
    },
    // borderColor: {
    //   graylight: "#C9C9C9",
    //   secondary: "#F16021",
    // },
    lineHeight: {
      xxl: "5.1875rem",
      xl: "3.5rem",
      normal: "1.90rem",
    },

    extend: {},
  },
  extend: {},
  plugins: [require("flowbite/plugin")],
};
