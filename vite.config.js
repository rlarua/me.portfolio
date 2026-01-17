import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/**
 * Vite 설정 파일
 * 
 * 주요 설정:
 * - plugins: React 및 Tailwind CSS 지원
 * - resolve.alias: '@'를 '/src' 경로로 매핑하여 절대 경로 import 지원
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // 프로젝트 내에서 '@/'를 사용하여 src 폴더에 접근 가능
      '@': path.resolve(__dirname, './src'),
    },
  },
})
