import styles from './Blog.module.scss'
import React from 'react'
import { Temporal } from '@js-temporal/polyfill'
import articles from './articles'
import { Link } from 'react-router-dom'
import printTime from '../helpers/printTime'
import { classList } from '@lbfalvy/react-utils'
import sstyles from '../helpers/shared.module.scss';

/*const catalog = articles.reduce(
    (prev, cur) => ({ ...prev, [cur.url]: cur }),
    {} as Record<string, Metadata|undefined>
)*/

export interface Metadata {
    url: string
    title: string
    summary: string
    time: Temporal.ZonedDateTime
    load: () => Promise<{ default: React.ComponentType }>
}

export default function BlogPage(): React.ReactElement {
    const list = articles.sort((a, b) => Temporal.ZonedDateTime.compare(a.time, b.time))
    return <div className={classList(styles.list)}>
        <h2>Latest articles</h2>
        {list.map(art => <Link key={art.url} to={`/blog/${art.url}`} className={sstyles.linkbox}>
            <article>
                <h3>{art.title}</h3>
                <time>{printTime(art.time)}</time>
                <summary>{art.summary}</summary>
            </article>
        </Link>)}
    </div>
}