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

export function AppLayout(): React.ReactElement {
    useMeta('viewport', 'width=device-width, initial-scale=1.0')
    useMeta('theme-color', '#222')
    useLink('icon', 'https://github.com/lbfalvy.png')
    return <div className={styles.main}>
        <header className={styles.pagehead}>
            <h1>Lawrence Bet…</h1>
            <nav>
                <NavLink to="/" end>Blog</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/about">About me</NavLink>
            </nav>
        </header>
		<main className={styles.content}>
            <Outlet/>
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