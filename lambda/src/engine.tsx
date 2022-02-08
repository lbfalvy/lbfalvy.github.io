import { EvalSteps, evaluate, stringify, Token, tokenEq, tokenize } from "./expressions"
import { addToStore, DefStore, SubDetails, trySub } from "./definitions"
import React from "react"

export type LogEntry = EvalSteps | SubDetails<Token[]>

function evalLoop(expression: Token[], store: DefStore<Token[]>, limit = 10): [boolean, Token[], LogEntry[]] {
    const log: LogEntry[] = []
    for (let i = 0; i < limit; i++) {
        const [result, steps] = evaluate(expression)
        if (tokenEq(result, expression)) {
            const subResult = trySub(result, store)
            if (!subResult) return [true, result, log]
            log.push(subResult)
            expression = [...subResult.left, ...subResult.substitute, ...subResult.right]
            continue
        }
        log.push(steps)
        expression = result
    }
    return [false, expression, log]
}

export type State = DefStore<Token[]>

export function execute(command: string, state: State): [boolean, string, LogEntry[], State] {
    const assign = /^([a-zA-Z0-9_]+)=/.exec(command)
    if (assign) {
        const name = assign[1]
        const expression = command.substring(assign[0].length)
        const [halts, value, log] = evalLoop(tokenize(expression), state)
        return [halts, stringify(value), log, addToStore(state, name, value)]
    }
    const [halts, value, log] = evalLoop(tokenize(command), state)
    return [halts, stringify(value), log, state]
}