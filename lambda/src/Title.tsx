import React from "react";
import './Title.scss';

export function Title({ children }: { children: React.ReactNode }): React.ReactElement {
    return <h5 className="Title">
        <span className="content">
            {children}
        </span>
        <span className="filler" />
    </h5>
}