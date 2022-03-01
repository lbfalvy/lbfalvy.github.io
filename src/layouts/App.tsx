import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Github from "../components/icons/Github";
import KoFi from "../components/icons/KoFi";
import KoFi2 from "../components/icons/KoFi2";
import LinkedIn from "../components/icons/LinkedIn";
import Npm from "../components/icons/Npm";
import Patreon from "../components/icons/Patreon";
import Rss from "../components/icons/Rss";
import { useTitle } from "../hooks/useTitle";
import styles from './App.module.scss';

export function AppLayout(): React.ReactElement {
    useTitle('Lawrence Bethlenfalvy')
    return <div className={styles.main}>
        <header className={styles.pagehead}>
            <h1>Lawrence Bethlenfalvy</h1>
            <nav>
                <NavLink to="/">Blog</NavLink>
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
                <a href="mailto:lbfalvy@protonmail.com" className="email">
                    <i style={{ background: 'white', color: 'black' }} className="gg-mail"></i>
                </a>
                <a href="https://www.linkedin.com/in/lawrence-bethlenfalvy/">
                    <LinkedIn />
                </a>
                <a href="https://github.com/lbfalvy">
                    <Github />
                </a>
                <a href="https://www.npmjs.com/~lbfalvy">
                    <Npm />
                </a>
                <a href="https://ko-fi.com/lbfalvy">
                    <KoFi />
                </a>
                <a href="https://www.patreon.com/lbfalvy">
                    <Patreon />
                </a>
                <a href="/feed">
                    <Rss />
                </a>
            </div>
        </footer>

    </div>
}