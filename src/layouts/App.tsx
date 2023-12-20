import React from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { A } from "../components/A";
import Github from "../components/icons/Github";
import KoFi from "../components/icons/KoFi";
import LinkedIn from "../components/icons/LinkedIn";
import Npm from "../components/icons/Npm";
import Patreon from "../components/icons/Patreon";
import Rss from "../components/icons/Rss";
import Telegram from "../components/icons/Telegram";
import Twitter from "../components/icons/Twitter";
import useLink from "../hooks/useLink";
import useMeta from "../hooks/useMeta";
import styles from './App.module.scss';

function debounce<T>(timeout: number, callback: (arg: T) => void): (arg: T) => void {
	let cb: null | ReturnType<typeof setTimeout> = null;
	return t => {
		if (cb) clearTimeout(cb);
		cb = setTimeout(() => {
			cb = null;
			callback(t);
		}, timeout)
	}
}

export function AppLayout(): React.ReactElement {
	useMeta('viewport', 'width=device-width, initial-scale=1.0')
	useMeta('theme-color', '#222')
	useLink('icon', 'https://github.com/lbfalvy.png')
	const content_ref = React.useRef<HTMLElement>(null);
	React.useEffect(() => {
		const stored_scroll = localStorage.getItem(`scroll-for-${window.location.href}`);
		const scroll = stored_scroll ? Number.parseInt(stored_scroll) : 0;
		const exit = [false];
		(async () => {
			while (!exit[0]) {
				if (content_ref.current != null) {
					if (content_ref.current.clientHeight != content_ref.current.scrollHeight) {
						content_ref.current.scrollTop = scroll;
						console.log("Restored scroll height")
						break;
					}
				}
				await new Promise(res => setTimeout(res, 100));
			}
		})();
	}, [])
	const saveScroll = debounce(100, (top: number | undefined) => {
		if (top != undefined) localStorage.setItem(`scroll-for-${window.location.href}`, top.toString());
	});
	return <div className={styles.main}>
		<header className={styles.pagehead}>
			<h1>Lawrence Bet…</h1>
			<nav>
				<NavLink to="/" end>Blog</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<NavLink to="/about">About me</NavLink>
			</nav>
		</header>
		<main className={styles.content} ref={content_ref} onScroll={ev => saveScroll(content_ref.current?.scrollTop)}>
			<Outlet />
		</main>
		<footer className={styles.contact}>
			<h2>Contact</h2>
			<div>
				<A href="mailto:lbfalvy@protonmail.com">
					<i style={{ background: 'white', color: 'black' }} className="gg-mail"></i>
				</A>
				<A href="https://www.linkedin.com/in/lawrence-bethlenfalvy/">
					<LinkedIn />
				</A>
				<A href="https://github.com/lbfalvy">
					<Github />
				</A>
				<A href="https://www.npmjs.com/~lbfalvy">
					<Npm />
				</A>
				<A href="https://ko-fi.com/lbfalvy">
					<KoFi />
				</A>
				<A href="https://www.patreon.com/lbfalvy">
					<Patreon />
				</A>
				<A href="/feed">
					<Rss />
				</A>
				<A href="https://twitter.com/lbfalvy">
					<Twitter />
				</A>
				<A href="https://t.me/lbfalvy">
					<Telegram />
				</A>
			</div>
		</footer>

	</div>
}