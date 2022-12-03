import React from "react";
import { ReactElement, ReactNode } from "react";

export function A({ children, href }: { children: ReactNode, href: string }): ReactElement {
    return <a href={href} target="_blank">
        {children}
    </a>
}