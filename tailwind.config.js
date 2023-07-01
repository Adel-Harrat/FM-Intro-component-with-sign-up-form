/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my: {
          primary: {
            red: "hsl(0, 100%, 74%) ",
            green: "hsl(154, 59%, 51%)",
          },
          accent: {
            blue: "hsl(248, 32%, 49%)",
          },
          neutral: {
            "dark-blue": "hsl(249, 10%, 26%)",
            "grayish-blue": "hsl(246, 25%, 77%)",
          },
        },
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/images/bg-intro-desktop.png')",
        mobile: "url('/images/bg-intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
