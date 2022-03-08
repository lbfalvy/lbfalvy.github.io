import simpleSSR from 'simple-ssr'
import path from 'path'
import fs from 'fs/promises'
import { createServer } from 'vite'
import { parse } from 'node-html-parser'

// Config

const port = 8420
const articleFiles = await fs.readdir('./src/pages/articles')
const routes = [
    '',
    'about',
    'projects',
    ...articleFiles
        .filter(x => x.endsWith('.mdx'))
        .map(x => `blog/${x.slice(0, x.length - '.mdx'.length)}`)    
]
const prefix = 'docs'
const template = await fs.readFile('./docs/index.html', { encoding: 'utf-8' })

// Implementation

function segmentPath(path: string): string[] {
    return path.split('/').filter(x => x.length)
}

function getPathForRoute(prefix: string, route: string): string[] {
    if (route.endsWith('.html')) return [
        ...segmentPath(prefix), 
        ...segmentPath(route)
    ]
    return [
        ...segmentPath(prefix),
        ...segmentPath(route), 
        'index.html'
    ]
}

async function write(data: string, path: string[]): Promise<void> {
    await fs.mkdir(path.slice(0, -1).join('/'), { recursive: true })
    await fs.writeFile(path.join('/'), data)
}

console.log('Starting Vite and simpleSSR...')

const [srv] = await Promise.all([
    createServer().then(s => s.listen(port)),
    simpleSSR.start({ headless: true })
])

console.log('Rendering HTML...')

const results = await Promise.all(
    routes.map(async route => {
        const { html } = await simpleSSR.render(
            `http://localhost:${port}/${route}`,
            {
                timeout: 6000,
                domTarget: null,
                waitUntil: 'networkidle0'
            }
        )
        const root = parse(html).querySelector('#root')
        const head = parse(html).querySelectorAll('meta[name], meta[property], title')
        if (!root) throw new Error(`#root not found`)
        return [
            route,
            root.toString(),
            head.map(t => t.toString()).join('\n')
        ] as [string, string, string]
    })
)

console.log('Stopping simpleSSR...')

await Promise.all([
    srv.close(),
    simpleSSR.stop()
])

console.log('Writing back to file...')

await Promise.all(results.map(async ([route, html, head]) => {
    const path = getPathForRoute(prefix, route)
    await write(
        template
            .replace('<!-- SSR-placeholder -->', html)
            .replace('<!-- SSR-head-placeholder -->', head),
        path
    )
}))