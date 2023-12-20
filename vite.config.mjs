import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from '@mdx-js/rollup'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from "rehype-highlight"

export default defineConfig({
	build: {
		outDir: './docs',
	},
	plugins: [
		reactRefresh(),
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
				rehypeHighlight,
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
		})
	]
})