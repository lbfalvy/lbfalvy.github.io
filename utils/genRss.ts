// import articles from '../src/pages/articles'
import Rss from 'rss'
import { Temporal } from '@js-temporal/polyfill'
import fs from 'fs/promises'
import Metadata from '../src/pages/articles/Metadata'
import { domain } from '../config'

const now = Temporal.Now.zonedDateTimeISO()
const baseURL = `https:/${domain}`
const artPath = './src/pages/articles'
const articleFiles = await fs.readdir(artPath)
const articles = (await Promise.all(articleFiles
    .filter(x => x.endsWith('.tsx') && x.match(/^[0-9]/))
    .map(f => import(`.${artPath}/${f}`) as Promise<{ default: Metadata }>)
)).map(x => x.default)

const feed = new Rss({
    feed_url: `${baseURL}/feed`,
    site_url: baseURL,
    title: `Lawrence Bethlenfalvy's blog`,
    categories: ['blog', ...new Set(articles.flatMap(art => art.tags))],
    copyright: `${now.year} Lawrence Bethlenfalvy all`,
    description: `
        I often post about my various projects and my experiences with assorted tools.
        I like a mathematical approah to computer science and an engineer's approach to
        mathematics.
    `,
    image_url: 'https://github.com/lbfalvy.png',
    language: 'en-US',
    managingEditor: 'Lawrence Bethlenfalvy',
    pubDate: now.toString(),
    ttl: 10,
    webMaster: 'Lawrence Bethlenfalvy <lbfalvy@protonmail.com>'
})
for (const article of articles.filter(x => !x.unlisted)) {
    feed.item({
        date: article.time.toString(),
        description: article.summary,
        title: article.title,
        url: `${baseURL}/blog/${article.url}`,
        author: article.author,
        categories: article.tags
    })
}
await fs.writeFile(`docs/feed`, feed.xml())