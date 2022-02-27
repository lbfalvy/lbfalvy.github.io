import React from "react";
import styles from './index.module.scss';

export default function AboutPage() {
    return <div className={styles.main}>
        <img src='https://github.com/lbfalvy.png' />
        <p>
            I make websites and web-based applications primarily with React. I enjoy
            seeing the fruit of my labour, which is why I do so much frontend development
            even though I'm not exactly an artistic genius, as finest demonstrated by this
            website.
        </p>
        <p>
            I really like perfectly designed infrastructure, and in an effort to
            construct it for my own projects I've racked up a considerable amount of
            DevOps experience.
        </p>
        <p>
            I studied a lot of advanced mathematical topics in high school, but I never
            found it engaging enough to study properly and I wasn't smart enough to
            do well without that extra effort so I never really got into it. Nowadays
            I view mathematics more as a hobby, and in this capacity read mainly
            about type theory and abstract algebra.
        </p>
    </div>
}