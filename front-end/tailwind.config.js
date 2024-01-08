/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ide: {
          bg: "#FCFCFC",
          line: "#6B7D8F1F",
          comment: "#787B8099",
          keyword: "#FA8D3E",
          string: "#86B300",
          entity: "#399EE6",
          tag: "#55B4D4",
          text: "#5C6166",
          func: "#F2AE49",
          special: "#E6BA7E",
          constant: "#A37ACC",
          markup: "#F07171",
        },
      },
    },
  },
  plugins: [{ "postcss-import": {}, "tailwindcss/nesting": {} }],
};
