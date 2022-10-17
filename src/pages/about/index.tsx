import React from "react";
import styles from './index.module.scss';

export default function AboutPage() {
    return <div className={styles.main}>
        <img src='https://github.com/lbfalvy.png' />
        <p>
            My name is Bethlenfalvy Lőrinc, I make websites and web-based applications primarily
            with React. I enjoy seeing the fruit of my labour, which is why I do so much
            frontend development even though I'm not exactly an artistic genius, as finest
            demonstrated by this website.
        </p>
        <p>
            I really like perfectly designed infrastructure, and in an effort to
            construct it for my own projects I've racked up a considerable amount of
            DevOps experience.
        </p>
        <p>
            I studied a lot of advanced mathematical topics in high school, and although
            I was never a big fan of solving equations for hours on end the approach and
            some of the concepts stuck with me. I like to draw on mathematical techniques
            for day-to-day problem solving, but I also view it as a hobby.
        </p>
        <p>
            More recently I've been hard at work on my small conceptual language, Orchid,
            which, like anything I do, tries to be unopinionated, minimalistic in design,
            and robust in execution.
            Designing a programming language is a constant goat game against the halting problem
            so realising all these principles at the same time is nigh impossible, and incremental
            progress is fundamentally incompatible with the optimal, holistic approach to
            issues like type checking, but when I have something to report I do it here.
        </p>
    </div>
}