import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src', 'pages')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react(), reactRefresh()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        analise: resolve(root, 'analise', 'index.html'),
        calendario: resolve(root, 'calendario', 'index.html'),
        criptografia: resolve(root, 'criptografia', 'index.html'),
        'dados-publicos': resolve(root, 'dados-publicos', 'index.html'),
        desenvolvedor: resolve(root, 'desenvolvedor', 'index.html'),
        documentos: resolve(root, 'documentos', 'index.html'),
        'editor-texto': resolve(root, 'editor-texto', 'index.html'),
        financeiro: resolve(root, 'financeiro', 'index.html'),
        sorteio: resolve(root, 'sorteio', 'index.html'),
      }
    }
  }
})