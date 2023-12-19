import { Await } from "@lbfalvy/react-await";
import React from "react";
import { useParams } from "react-router";
import printTime from "../helpers/printTime";
import articles from './articles'
import styles from './Article.module.scss';
import useMetadata from "../hooks/useMetadata";
import { SsrReady } from "../components/SsrReady";
import { ssrReady } from "../helpers/ssrReady";

export default function ArticlePage(): React.ReactElement {
    const { article } = useParams()
    const metadata = articles.find(({ url }) => url == article)
    useMetadata('article',
        metadata?.title ?? '404',
        metadata?.summary.trim() ?? 'Page Not Found',
        metadata?.tags ?? [],
        metadata?.author,
        metadata?.image)
    if (!metadata) return <>Article not found</>
    return <article className={styles.main}>
        <header>
            <h1>{metadata.title}</h1>
            <time>{printTime(metadata.time)}</time>
            <address>{metadata.author}</address>
            <summary>{metadata.summary}</summary>
        </header>
        <hr />
        <main>
            <Await obtainFor={[async () => {
                const result = await metadata.load();
                ssrReady();
                return result;
            }, metadata.load]} />
        </main>
    </article>
}