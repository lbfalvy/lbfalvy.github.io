import ts from 'rollup-plugin-ts'
import html from '@rollup/plugin-html'
import resolve from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import scss from 'rollup-plugin-scss'

export default {
    input: 'src/index.tsx',
    output: {
        dir: './final',
        format: 'umd'
    },
    plugins: [
        replace({
            preventAssignment: true,
            values: {
                'process.env.NODE_ENV': `"development"`
            }
        }),
        ts(),
        html(),
        resolve(),
        cjs(),
        scss({ insert: true })
    ]
}