import React from "react"
import { createState, execute, LogEntry, State } from "../engine"
import { useLog } from "./useLog"

export type Row = {
    command: string
    log?: LogEntry[]
    status: 'loops'|'halts'|'error'
    result: string
}

export function useExecutor(limit = 10): [Row[], State, (command: string | string[]) => void, () => void] {
    const [output, out] = useLog<Row>()
    const [state, setState] = React.useState(createState)
    function exec(state: State, command: string): State {
        try {
            const [halts, result, log, nextState] = execute(state, command, limit)
            out(['push', {
                command,
                log, result,
                status: halts ? 'halts' : 'loops'
            }])
            return nextState
        } catch(e) {
            out(['push', {
                command,
                result: (e as Error).toString(),
                status: 'error'
            }])
            return state
        }
    }
    return [
        output, state,
        command => {
            if (typeof command == 'string') setState(exec(state, command))
            else setState(command.reduce(exec, state))
        },
        () => {
            out(['set', []])
            setState(createState())
        }
    ]
}