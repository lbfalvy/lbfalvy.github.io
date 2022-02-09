import React from "react";
import { Token } from "./expressions";
import './Expression.scss'

export function Expression({ expr }: { expr: Token[] }): React.ReactElement {
    if (expr.length == 0) return <></>
    return <span className="Expression">
        {expr.map((tok, i) => typeof tok == 'string'
            ? <span key={i} className="token">{tok}</span>
            : <span key={i} className="name">{tok[1]}</span>
        )}
    </span>
}