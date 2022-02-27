import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
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
                    lbfalvy@protonmail.com
                </a>
                <a href="https://www.linkedin.com/in/lawrence-bethlenfalvy/">
                    LinkedIn
                </a>
                <a href="https://github.com/lbfalvy">
                    Github
                </a>
                <a href="https://www.npmjs.com/~lbfalvy">
                    NPM
                </a>
            </div>
            <div>
                <a href="https://ko-fi.com/lbfalvy">
                    Ko‑fi
                </a>
                <a href="https://www.patreon.com/lbfalvy">
                    Patreon
                </a>
            </div>
        </footer>

    </div>
}