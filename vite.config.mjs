import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import plainText from 'vite-plugin-virtual-plain-text'
import mdx from '@mdx-js/rollup'

// The typings for this module are broken so I have to forcibly select default
// const myPlainText = (plainText as any).default as typeof plainText

console.log(plainText)

export default defineConfig({
    plugins: [
        reactRefresh(),
       // myPlainText('@src'),
        mdx()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@use "@/styles" as common;`,
                // importer(...args) {
                //     if (args[0] !== "@/styles") {
                //         return;
                //     }
                //     return {
                //         file: `${path.resolve(__dirname, "./src/assets/styles")}`
                //     }
                // }
            }
        }
    }
})