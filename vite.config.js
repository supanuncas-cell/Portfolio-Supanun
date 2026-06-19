import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Supanun/', // <-- เพิ่มบรรทัดนี้ (เปลี่ยนชื่อให้ตรงกับ Repository ของคุณ)
})