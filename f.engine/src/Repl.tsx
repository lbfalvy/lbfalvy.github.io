import { classList } from "@lbfalvy/react-utils";
import React from "react";
import './Repl.scss';
import { LogDisplay } from "./LogDisplay";
import { StateView } from "./StateView";
import { Row, useExecutor } from "./hooks/useExecutor";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { RightButton } from "./RightButton";
import { Title } from "./Title";

interface ReplProps {
    init?: string[]
    share?: (log: string[]) => void
}

interface RowProps {
    row: Row
    rewind?: () => void
}

function Row({ row, rewind }: RowProps): React.ReactElement {
    const [details, toggleDetails] = React.useReducer(b => !b, row.log !== undefined && row.log.length < 20)
    const visible = details ? row.log : row.log?.slice(0, 5)
    return <article className={classList('row', row.status)}>
        <div className="command">
            {row.command}
            {rewind? <RightButton onClick={rewind}>Rewind</RightButton> :null}
        </div>
        {visible && row.log && visible.length?
            <div className={classList('process', visible.length < row.log.length && 'truncated')}>
                <RightButton onClick={toggleDetails}>Toggle</RightButton>
                {visible.map((e, i) => <LogDisplay entry={e} key={i} />)}
            </div>
        :null}
        <div className="result">{row.result}</div>
    </article>
}

export function Repl({ init, share }: ReplProps) {
    const [input, setInput] = React.useState('')
    const [limit, setLimit] = useLocalStorage('executionLimit', '1000')
    const lim = Number.parseInt(limit)
    const [output, state, exec, reset] = useExecutor(Number.isNaN(lim) ? 10 : lim)
    const logRef = React.useRef<HTMLElement>(null)
    React.useEffect(() => {
        if (init?.length) {
            reset()
            exec(init)
        }
    }, [JSON.stringify(init)])
    React.useEffect(() => {
        const log = logRef.current
        if (log) log.scrollTop = log.scrollHeight - log.clientHeight
    }, [output.length])
    return <div className="Repl">
        <section className="state">
            <Title>Executor state</Title>
            <StateView state={state} />
            <div>
                <Title>Max iterations</Title>
                <input value={limit} onChange={e => setLimit(e.target.value)} />
            </div>
            <Title>Actions</Title>
            {share? <>
                <button onClick={() => share(output.map(row => row.command))}>
                    Share
                </button>
                <button onClick={() => share([])}>
                    Clear
                </button>
            </> :null}
        </section>
        <section className="log" ref={logRef}>
            {output.map((row, i) =>
                <Row row={row} key={i} rewind={
                    share?
                        () => share(output.slice(0, i + 1).map(row => row.command))
                    :undefined
                }/> 
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