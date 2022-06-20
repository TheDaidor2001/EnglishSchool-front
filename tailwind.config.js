module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bookmark-main" : "#5267DF",
        "bookmark-second" : "#482C3D",
        "bookmark-white" : "#f7f7f7",
        "bookmark-red" : "#FA5959",
        "bookmark-black" : "#191716",
      }
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
    
    
   
  },
  plugins: [],
}