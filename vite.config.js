import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import githubPages from 'vite-plugin-github-pages';


// https://vite.dev/config/
export default defineConfig({
  base: "/icc_welcome/", // Uncomment this line if you are deploying to GitHub Pages
  plugins: [react()],
  // plugins: [react(), githubPages()],
})
