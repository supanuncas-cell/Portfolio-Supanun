/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#ece9e2", // สีขอบตามสไตล์ในโค้ด
        bg: "#f9f9f7",     // สีพื้นหลังปุ่ม/แท็ก
      },
    },
  },
  plugins: [],
}