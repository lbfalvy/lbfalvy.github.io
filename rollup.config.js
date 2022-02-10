import ts from 'rollup-plugin-ts'
import html from '@rollup/plugin-html'
import resolve from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import scss from 'rollup-plugin-scss'

export default {
    input: 'src/index.tsx',
    output: {
        dir: './docs',
        format: 'umd'
    },
    plugins: [
        html({
            title: 'Lawrence Bethlenfalvy',
            attributes: {
                html: { lang: 'en' }
            },
            meta: [
                { charset: 'UTF-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
                { name: 'author', content: 'Lawrence Bethlenfalvy' },
                { name: 'description', content: "Portfolio | I'm a web developer working with React and Typescript" },
                { name: 'keywords', content: 'portfolio,web developer,react,typescript,lawrence,bethlenfalvy' },
                { name: 'theme-color', content: '#222' }
            ]
        }),
        replace({
            preventAssignment: true,
            values: {
                'process.env.NODE_ENV': `"development"`
            }
        }),
        ts(),
        resolve(),
        cjs(),
        scss({ insert: true })
    ]
}