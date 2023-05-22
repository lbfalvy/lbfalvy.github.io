import path from 'path'
import fs from 'fs/promises'
import { createServer } from 'vite'
import { parse } from 'node-html-parser'
import puppeteer from 'puppeteer';

// Config

const dir = './docs'
const CNAME = 'www.lbfalvy.com'
async function routes(): Promise<string[]> {
    const articleFiles = await fs.readdir('./src/pages/articles')
    return [
        '',
        'about',
        'projects',
        ...articleFiles
            .filter(x => x.endsWith('.mdx'))
            .map(x => `blog/${x.slice(0, x.length - '.mdx'.length)}`)    
    ]
}

// Implementation

async function getCrawler(): Promise<{
    stop: () => Promise<void>
    get: (path: string) => Promise<string>
}> {
    const browser = await puppeteer.launch({ headless: false });
    return {
        stop: () => Promise.resolve(),//() => browser.close(),
        async get(path) {
            const page = await browser.newPage();
            await page.goto(path);
            await page.waitForNetworkIdle({ idleTime: 10000 });
            const content = await page.content();
            await page.close();
            return content;
        }
    }
}

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

async function prerender(routes: string[], dir: string, cname?: string) { 
    const port = 8432
    console.log('Starting Vite and Puppeteer...')
    const [srv, crawler] = await Promise.all([
        createServer().then(s => s.listen(port)),
        getCrawler()
    ])

    console.log('Rendering HTML...')
    const results = await Promise.all(
        routes.map(async route => {
            console.log(`Rendering ${route}`)
            const html = await crawler.get(`http://localhost:${port}/${route}`);
            console.log(`Successfully rendered ${route}`)
            const root = parse(html).querySelector('#root')
            const head = parse(html).querySelectorAll('[data-ssr], title')
            if (!root) throw new Error(`#root not found`)
            return [
                route,
                root.toString(),
                head.map(t => t.toString()).join('\n')
            ] as [string, string, string]
        })
    )

    console.log('Stopping Vite and Puppeteer...')
    await Promise.all([
        srv.close(),
        crawler.stop()
    ])

    console.log('Writing back to file...')
    const template = await fs.readFile(`${dir}/index.html`, { encoding: 'utf-8' })
    await Promise.all(results.map(async ([route, html, head]) => {
        const path = getPathForRoute(dir, route)
        await write(
            template
                .replace('<!-- SSR-placeholder -->', html)
                .replace('<!-- SSR-head-placeholder -->', head),
            path,
        )
    }))

    if (cname !== undefined) await fs.writeFile(`${dir}/CNAME`, cname);
}

routes().then(routes => prerender(routes, dir, CNAME))