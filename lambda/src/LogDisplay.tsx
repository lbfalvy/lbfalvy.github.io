import React, { ReactElement, ReactNode } from "react";
import { LogEntry } from "./engine";
import { stringify, Token } from "./expressions";

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

function Expression({ expr }: { expr: Token[] }): React.ReactElement {
    return <span className="Expression">
        {expr.map(tok => typeof tok == 'string'
            ? <span className="token">{tok}</span>
            : <span className="name">{tok[1]}</span>
        )}
    </span>
}

export function LogDisplay(entry: LogEntry): React.ReactElement {
    return <div className="LogDisplay">
        {entry.type == 'EvalSteps' ? <>
            <div>
                <Expression expr={entry.expression} />
            </div>
            <div className="found-lambda">
                <span className="fade">{stringify(entry.lambda.prefix)}</span>
                <span className="lambda">
                    \
                    <Var>{entry.lambda.param}</Var>
                    .
                    {mapJoin(
                        entry.bodySections, 
                        v => <>{stringify(v)}</>,
                        () => <Var>{entry.lambda.param}</Var>
                    )}
                </span>
                <span className="argument">{stringify(entry.lambda.argument)}</span>
                <span className="fade">{stringify(entry.lambda.postfix)}</span>
            </div>
            <div className="evaluated-lambda">
                <span className="fade">{stringify(entry.lambda.prefix)}</span>
                <span className="lambda">
                    {mapJoin(
                        entry.bodySections,
                        v => <>{stringify(v)}</>,
                        () => <Var>{stringify(entry.substitute)}</Var>
                    )}
                </span>
                <span className="fade">{stringify(entry.lambda.postfix)}</span>
            </div>
        </> : entry.type == 'SubDetails' ? <>
            <div className="sub">
                <Expression expr={entry.left} />
                <Var>{entry.name}</Var>
                <Expression expr={entry.right} />
            </div>
            <div className="sub-result">
                <Expression expr={entry.left} />
                <Var>{stringify(entry.substitute)}</Var>
                <Expression expr={entry.right} />
            </div>
        </> : null}
    </div>
}