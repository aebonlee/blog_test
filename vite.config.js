import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/blog_test/',
  plugins: [react()],
  build: {
    outDir: '.',  // 빌드 결과를 루트에 출력
    emptyOutDir: false,  // 소스코드를 지우지 않음
  },
})
