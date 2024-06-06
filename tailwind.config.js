/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      // screens: {
      //   'sm': '640px',
      //   'md': '768px',
      //   'lg': '1024px',
      //   'xl': '1280px',
      //   '2xl': '1536px',
      // },
      // spacing: {
      //   1: "8px",
      //   2: "12px",
      //   3: "16px",
      //   4: "24px",
      //   5: "32px",
      //   6: "48px",
      // },
      colors: {
        gray: "	#9e9aa7",
        lightGray: "	#F3F4F6",
        cyan: "	#2acfcf",
        darkViolet: "	#3b3054",
      },
    },
  },
  plugins: [],
};
