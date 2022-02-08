import { classList } from "@lbfalvy/react-utils";
import React from "react";
import './Repl.scss';
import { createState, execute, LogEntry, State } from "./engine";
import { LogDisplay } from "./LogDisplay";
import { StateView } from "./StateView";
import { useLog } from "./useLog";

type Row = {
    command: string
    log?: LogEntry[]
    status: 'loops'|'halts'|'error'
    result: string
}

function useExecutor(): [Row[], State, (command: string | string[]) => void, () => void] {
    const [output, out] = useLog<Row>()
    const [state, setState] = React.useState(createState)
    function exec(state: State, command: string): State {
        try {
            const [halts, result, log, nextState] = execute(state, command)
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

interface ReplProps {
    init?: string[]
    share?: (log: string[]) => void
}

export function Repl({ init, share }: ReplProps) {
    const [input, setInput] = React.useState('')
    const [output, state, exec, reset] = useExecutor()
    React.useEffect(() => {
        if (init?.length) {
            reset()
            exec(init)
        }
    }, [JSON.stringify(init)])
    return <div className="Repl">
        <section className="state">
            <StateView state={state} />
            {share? <>
                <button onClick={() => share(output.map(row => row.command))}>
                    Share
                </button>
                <button onClick={() => share([])}>
                    Clear
                </button>
            </> :null}
        </section>
        <section className="log">
            {output.map((row, i) =>
                <article className={classList('row', row.status)} key={i}>
                    <div className="command">{row.command}</div>
                    {row.log?.map((e, i) => <LogDisplay entry={e} key={i} />)}
                    <div className="result">{row.result}</div>
                </article>
            )}
        </section>
        <form onSubmit={e => {
            e.preventDefault()
            exec(input)
            setInput('')
        }}>
            <input autoFocus value={input} onChange={e => setInput(e.target.value)} />
            <button type='submit'>Run</button>
        </form>
    </div>
}