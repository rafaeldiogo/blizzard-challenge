/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        diabloiv: "url('./assets/bannerhero/images/diabloiv-bg.png')",
        hearthstone: "url('./assets/bannerhero/images/hearthstone-bg.png')",
        wow: "url('./assets/bannerhero/images/wow-bg.png')",
        footer: "url('./assets/footer/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
