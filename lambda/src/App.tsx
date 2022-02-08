import React from "react";
import { Repl } from "./Repl";
import './App.scss';

const examples = [
    [
        'Introduction',
        '?log=%5B%22%23+Lambda+calculus+describes+functions+with+substitution.%22%2C%22%23+A+lambda+function+consists+of+a+variable+name+and+a+body.%22%2C%22%5C%5Cx.x+%2B+1%22%2C%22%23+On+evaluation%2C+all+occurences+of+the+name+in+the+body+are+replaced+with+the+argument.%22%2C%22%28%5C%5Cx.x+%2B+1%29+2%22%2C%22%23+For+convenience+we+often+name+these+expressions%2C+however+recursion+isn%27t+allowed.%22%2C%22F%3D%5C%5Cx.1+%2F+x%22%2C%22%23+This+parser+doesn%27t+recognize+any+operators+not+normally+present+in+lambda+calculus%2C+so+surround+names+with+a+space.%22%5D'
    ],
    [
        'Boolean logic',
        '?log=%5B%22TRUE%3D%5C%5Cx.%5C%5Cy.x%22%2C%22FALSE%3D%5C%5Cx.%5C%5Cy.y%22%2C%22NOT%3D%5C%5Cx.x+FALSE+TRUE%22%2C%22NOT+TRUE%22%2C%22AND%3D%5C%5Cx.%5C%5Cy.x+y+x%22%2C%22OR%3D%5C%5Cx.%5C%5Cy.x+x+y%22%5D'
    ]
] as const

export function App(): React.ReactElement {
    const url = new URLSearchParams(window.location.search)
    const logParam = url.get('log')
    const log = React.useMemo(() => JSON.parse(logParam ?? '[]'), [logParam])
    return <div className="App">
        <div className="examples">
            {examples.map(([name, value]) => 
                <a href={value} key={name}>{name}</a>
            )}
        </div>
        <Repl init={log} share={log => {
            url.set('log', JSON.stringify(log))
            window.location.search = url.toString()
        }} />
    </div>
}