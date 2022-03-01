import { Temporal } from '@js-temporal/polyfill'
import { promises as fs } from 'fs'
import { argv } from 'process'

const now = Temporal.Now.instant().toString({ smallestUnit: 'minutes' })
const args = argv.slice(2)
const title = args[0]
const fileTime = now.slice(0, now.length - 1)
const safeTitle = title.replaceAll(/[^a-zA-Z0-9_\- ]/g, '')
console.log(safeTitle)
const fileName = `${fileTime}_${safeTitle.toLowerCase().replaceAll(' ', '_')}`
const componentName = `${safeTitle.replace(
    /(?:\s|^)([a-zA-Z])/g,
    (_, letter: string) => letter.toUpperCase()
)}Page`

const metadata =
`import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
    url: "${fileName}",
    title: ${JSON.stringify(title)},
    author: \`Your Name Here\`,
    tags: [],
    time: Temporal.ZonedDateTime.from("${now}[UTC]"),
    summary: \`
        Description here
    \`,
    unlisted: false,
    load: () => import(${JSON.stringify(`./${fileName}.mdx`)})
} as Metadata
`

const component = `
Content goes here!
`

await fs.writeFile(`src/pages/articles/${fileName}.tsx`, metadata)
await fs.writeFile(`src/pages/articles/${fileName}.mdx`, component)