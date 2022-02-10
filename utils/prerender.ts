import simpleSSR from 'simple-ssr'
import path from 'path'
import fs from 'fs/promises'

const file = path.join(process.cwd(),'docs','index.html')
console.log('Starting simpleSSR...')
await simpleSSR.start({ headless: true })
console.log('Rendering HTML...')
const { html } = await simpleSSR.render(
    `file://${file}`,
    {
        timeout: 1000,
        domTarget: ['body'],
        waitUntil: 'load'
    }
)
console.log('Stopping simpleSSR...')
await simpleSSR.stop()
console.log('Writing back to file...')
await fs.writeFile(file, html)