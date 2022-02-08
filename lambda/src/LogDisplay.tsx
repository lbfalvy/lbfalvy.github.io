import React, { ReactElement, ReactNode } from "react";
import { LogEntry } from "./engine";
import { Expression } from "./Expression";
import { stringify, Token } from "./expressions";
import './LogDisplay.scss'

function Var({ children }: { children: ReactNode }): ReactElement {
    return <span className="Var">
        {children}
    </span>
}

function mapJoin<T, U>(arr: T[], map: (t: T, i: number) => U, join: () => U): React.ReactElement {
    return <>{arr.map((v, i) => <>
        {map(v, i)}
        {i < arr.length - 1 ? join() : null}
    </>)}</>
}

export function LogDisplay({ entry }: { entry: LogEntry }): React.ReactElement {
    return <div className="LogDisplay">
        {entry.type == 'EvalSteps' ? <>
            <header>
                <Expression expr={entry.expression} />
            </header>
            <section className="found-lambda">
                <span className="fade">{stringify(entry.lambda.prefix)}</span>
                <span className="lambda">
                    \
                    <Var>{entry.lambda.param}</Var>
                    .
                    {mapJoin(
                        entry.bodySections, 
                        (v, i) => v.length? <span key={i}>{stringify(v)}</span> :null,
                        () => <Var>{entry.lambda.param}</Var>
                    )}
                </span>
                <span className="argument">{stringify(entry.lambda.argument)}</span>
                <span className="fade">{stringify(entry.lambda.postfix)}</span>
            </section>
            <footer className="evaluated-lambda">
                <span className="fade">{stringify(entry.lambda.prefix)}</span>
                <span className="lambda">
                    {mapJoin(
                        entry.bodySections,
                        (v, i) => v.length? <span key={i}>{stringify(v)}</span> :null,
                        () => <Var>{stringify(entry.substitute)}</Var>
                    )}
                </span>
                <span className="fade">{stringify(entry.lambda.postfix)}</span>
            </footer>
        </> : entry.type == 'SubDetails' ? <>
            <header className="sub">
                <Expression expr={entry.left} />
                <Var>{entry.name}</Var>
                <Expression expr={entry.right} />
            </header>
            <footer className="sub-result">
                <Expression expr={entry.left} />
                <Var>{stringify(entry.substitute)}</Var>
                <Expression expr={entry.right} />
            </footer>
        </> : null}
    </div>
}