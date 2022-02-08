import React from "react";
import { State } from "./engine";
import { Expression } from "./Expression";

export function StateView({ state }: { state: State }): React.ReactElement {
    const keys = Object.keys(state).sort()
    return <div className="StateView">
        {keys.map(k => <article key={k}>
            <span className='name'>{k}</span>
            <span className="eql">=</span>
            <span className="value"><Expression expr={state[k]!.value} /></span>
        </article>)}
    </div>
}