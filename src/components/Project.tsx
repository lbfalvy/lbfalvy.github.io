import React from "react";
import './Project.scss';

interface ProjectProps {
    name: string
    url: string
    children: React.ReactNode
}

export function Project({ name, url, children }: ProjectProps): React.ReactElement {
    return <a href={url} className="Project">
        <article>
            <h3>{name}</h3>
            <p>
                {children}
            </p>
        </article>
    </a>
}