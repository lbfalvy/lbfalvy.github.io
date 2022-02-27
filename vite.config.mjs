import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from '@mdx-js/rollup'
import rewriteAll from 'vite-plugin-rewrite-all'

export default defineConfig({
    build: {
        outDir: './docs'
    },
    plugins: [
        reactRefresh(),
        mdx(),
        rewriteAll()
    ]
})