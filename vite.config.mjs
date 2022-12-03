import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from '@mdx-js/rollup'
import rewriteAll from 'vite-plugin-rewrite-all'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
    build: {
        outDir: './docs'
    },
    plugins: [
        reactRefresh(),
        Inspect(),
        mdx({
            useDynamicImport: false,
            remarkPlugins: [
                [remarkToc, {
                    tight: true,
                    skip: '.{0}' // Nothing
                }]
            ],
            rehypePlugins: [
                rehypeSlug, 
                [rehypeAutolinkHeadings, {
                    content: {
                        type: 'element',
                        tagName: 'i',
                        properties: {
                            className: 'linkbtn gg-link'
                        }
                    }
                }]
            ]
        }),
        rewriteAll()
    ]
})