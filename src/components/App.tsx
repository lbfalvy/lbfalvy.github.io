import React from "react";
import { useTitle } from "../hooks/useTitle";
import './App.scss';
import { Project } from "./Project";

export function App(): React.ReactElement {
    useTitle('Lawrence Bethlenfalvy')
    return <div className="App">
        <section id='introduction'>
            <h1>Lawrence Bethlenfalvy</h1>
            <p>
                I make websites and web-based applications primarily with React. I love open
                source and mathematics, but I also like to see my work visually, which is why I
                do so much frontend.
            </p>
        </section>
		<section id='projects'>
            <h2>Projects</h2>
            <div>
                <Project name="Árnyékegyetem" url="https://arnyekegyetem.hu">
                    A complex SPA encompassing a simple blog engine, a wiki engine and a forum.
                    It's designed with mobile users in mind and it has a sophisticated token-based
                    auth system, so it really feels a lot like a mobile app that opens in a browser
                    window.
                </Project>
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
            </div>
        </section>
        <section id='contact'>
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
        </section>

    </div>
}