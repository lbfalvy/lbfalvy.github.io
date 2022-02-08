import React from "react";
import './body.scss';
import { stringify, parseLambda, sliceAt, tokenize, wrap, DefStore, createStore, Token, LambdaResult } from "./expressions";

export default function Body() {
    const [log, act] = React.useReducer((
        log: string[],
        cmd: ['init', string[]] | ['push', string]
    ) => { switch (cmd[0]) {
        case 'init': return cmd[1]
        case 'push': return [...log, cmd[1]]
    }}, [])
    const store = createStore()
    const states = log.map((cmd => ))
    return <>
        {log.map()}
        <input value={input} onChange={e => setInput(e.target.value)} />
        <div>{result}</div>
        <button onClick={() => setInput(result)}>Rerun</button>
    </>
}