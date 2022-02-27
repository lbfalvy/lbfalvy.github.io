import { classList } from "@lbfalvy/react-utils";
import React from "react";
import styles from './Project.module.scss';
import sstyles from '../helpers/shared.module.scss';

interface ProjectProps {
    name: string
    url: string
    children: React.ReactNode
}

export function Project({ name, url, children }: ProjectProps): React.ReactElement {
    return <a href={url} className={classList(styles.main, sstyles.linkbox)}>
        <article>
            <h3>{name}</h3>
            <p>
                {children}
            </p>
        </article>
    </a>
}