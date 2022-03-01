import styles from './Blog.module.scss'
import React, { useCallback } from 'react'
import { Temporal } from '@js-temporal/polyfill'
import articles from './articles'
import { Link, useSearchParams } from 'react-router-dom'
import printTime from '../helpers/printTime'
import { classList } from '@lbfalvy/react-utils'
import sstyles from '../helpers/shared.module.scss';
import useSearchTerm from '../hooks/useSearchTerm'

export default function BlogPage(): React.ReactElement {
    const items = articles.filter(x => x && !x.unlisted)
    const categories = [...new Set(items.flatMap(x => x.tags))]
    const [filterStr, setFilterStr] = useSearchTerm('filter')
    const filter = filterStr?.split(',').filter(x => x.length) ?? []
    const toggleFilter = useCallback((s: string) => {
        if (filter.includes(s))
            setFilterStr(filter.filter(x => x != s).join(','))
        else setFilterStr(`${filter.join(',')},${s}`)
    }, [filter])
    const list = items
        .filter(x => filter.every(t => x.tags.includes(t)))
        .sort((a, b) => Temporal.ZonedDateTime.compare(b.time, a.time))
    return <div className={classList(styles.list, sstyles.sideBarContainer)}>
        <h2>Latest {filter.map(x => `"${x}"`).join(', ')} articles</h2>
        <header className={sstyles.sideBar}>
            {categories.map(cat => 
                <a href="#" onClick={() => toggleFilter(cat)}
                    className={classList(
                        filter.includes(cat) && styles.active,
                        list.every(x => !x.tags.includes(cat)) && styles.empty
                    )}
                >{cat}</a>
            )}
        </header>
        <main>
            {list.map(art => 
                <Link key={art.url} to={`/blog/${art.url}`} className={sstyles.linkbox}>
                    <article>
                        <h3>{art.title}</h3>
                        <time>{printTime(art.time)}</time>
                        <address>{art.author}</address>
                        <summary>{art.summary}</summary>
                    </article>
                </Link>
            )}
        </main>
    </div>
}