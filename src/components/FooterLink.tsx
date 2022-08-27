import React from "react";
import { ReactElement, ReactNode } from "react";

export function FooterLink({ children, href }: { children: ReactNode, href: string }): ReactElement {
    return <a href={href} target="_blank">
        {children}
    </a>
}