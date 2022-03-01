import { Await } from "@lbfalvy/react-await";
import React from "react";
import { useParams } from "react-router";
import printTime from "../helpers/printTime";
import articles from './articles'
import styles from './Article.module.scss';

export default function ArticlePage(): React.ReactElement {
    const { article } = useParams()
    const metadata = articles.find(({ url }) => url == article)
    if (!metadata) return <>Article not found</>
    return <article className={styles.main}>
        <header>
            <h1>{metadata.title}</h1>
            <time>{printTime(metadata.time)}</time>
            <address>{metadata.author}</address>
            <summary>{metadata.summary}</summary>
        </header>
        <hr/>
        <main>
            <Await obtainFor={metadata.load} />
        </main>
    </article>
}