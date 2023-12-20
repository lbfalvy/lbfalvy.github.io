import styles from './Blog.module.scss'
import React, { useCallback } from 'react'
import { Temporal } from '@js-temporal/polyfill'
import articles from './articles'
import { Link, useSearchParams } from 'react-router-dom'
import printTime from '../helpers/printTime'
import { classList } from '@lbfalvy/react-utils'
import sstyles from '../helpers/shared.module.scss';
import useSearchTerm from '../hooks/useSearchTerm'
import useTags from '../hooks/useTags'
import useMetadata from '../hooks/useMetadata'
import { SsrReady } from '../components/SsrReady'

export default function BlogPage(): React.ReactElement {
	useMetadata('website',
		`Lawrence's Blug`,
		'I sometimes write about my projects or my experience with technologies',
		['blog']
	)
	const items = articles.filter(x => x && !x.unlisted)
	const [filtered, tags, filter, toggleFilter] = useTags(items, ...useSearchTerm('filter'))
	const list = filtered.sort((a, b) => Temporal.ZonedDateTime.compare(b.time, a.time))
	return <div className={classList(styles.list, sstyles.sideBarContainer)}>
		<h2>Latest {filter.map(x => `"${x}"`).join(', ')} articles</h2>
		<header className={classList(sstyles.sideBar, sstyles.filters)}>
			{tags.map(cat => 
				<a href="#" onClick={() => toggleFilter(cat)}
					key={cat}
					className={classList(
						filter.includes(cat) && sstyles.active,
						list.every(x => !x.tags.includes(cat)) && sstyles.empty
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
			<SsrReady/>
		</main>
	</div>
}