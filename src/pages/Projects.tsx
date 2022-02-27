import React from "react";
import { Project } from "../components/Project";
import styles from './Projects.module.scss';

export default function ProjectsPage() {
    return <div className={styles.main}>
        <h2>Projects</h2>
        <div>
            <Project name="React Await" url="https://www.npmjs.com/package/@lbfalvy/react-await">
                A React component for lazy-loading and extracting data fetching logic from the
                parent component. It works with Promises so it doesn't require any further
                effort from either the fetching library or the child, unlike Suspense which
                requires everyone's special effort.
            </Project>
            <Project name="React Context Menu"
                url="https://www.npmjs.com/package/@lbfalvy/react-context-menu"
            >
                A multilevel custom context menu for React. The API relies on React context
                so that menus can be combined over nested containers
            </Project>
            <Project name="λf.engine" url="https://lbfalvy.github.io/f.engine/">
                An interactive lambda calculus engine combined with a tutorial. I wrote it to
                explain lambda calculus to a friend.
            </Project>
            <Project name="Résumé" url="https://lbfalvy.github.io/cv/?lang=en">
                My CV is written in React. It does not look pretty when viewed in a web browser,
                and the CSS file is massive, but I can conclude that React is perfectly suited
                to designing printouts with advanced features like internationalization.
            </Project>
            <Project name="Árnyékegyetem" url="https://arnyekegyetem.hu">
                A complex SPA encompassing a simple blog engine, a wiki engine and a forum.
                It's designed with mobile users in mind and it has a sophisticated token-based
                auth system, so it really feels a lot like a mobile app that opens in a browser
                window.
            </Project>
        </div>
    </div>
}