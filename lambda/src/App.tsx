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
    ],
    [
        'Numbers I.',
        '?log=%5B%22%23%20Numbers%20are%20represented%20by%20a%20function%20that%20applies%20a%20parameter%20N%20times%22%2C%220%3D%5C%5Cf.%5C%5Cx.x%22%2C%221%3D%5C%5Cf.%5C%5Cx.f%20x%22%2C%222%3D%5C%5Cf.%5C%5Cx.f%20(f%20x)%22%2C%22%23%20N%201%20can%20be%20obtained%20from%20N%20by%20applying%20the%20parameter%20one%20more%20time%22%2C%22SUCC%3D%5C%5Cn.%5C%5Cf.%5C%5Cx.f(n%20f%20x)%22%2C%22SUCC%202%22%2C%223%3DSUCC%202%22%2C%22%23%20The%20n-th%20composition%20of%20f%20composed%20with%20the%20k-th%20composition%20of%20f%20gives%20the%20n%20k-th%20composition%20of%20f%22%2C%22PLUS%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.%5C%5Cx.n%20f%20(k%20f%20x)%22%2C%22PLUS%202%202%22%2C%22%23%20This%20multiplication%20function%20should%20not%20come%20as%20a%20surprise%22%2C%22MULT%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.n%20(k%20f)%22%2C%22MULT%202%203%22%5D'
    ],
    [
        "Pairs",
        '?log=%5B%22TRUE%3D%5C%5Cx.%5C%5Cy.x%3BFALSE%3D%5C%5Cx.%5C%5Cy.y%3B0%3D%5C%5Cf.%5C%5Cx.x%3BSUCC%3D%5C%5Cn.%5C%5Cf.%5C%5Cx.f%28n+f+x%29%22%2C%22%23+Pair+%28or+2-tuples%29+have+various+use+cases%2C+and+they%27re+a+fine+demonstration+of+how+closures+can+be+used+to+construct+datastructures.%22%2C%22PAIR%3D%5C%5Cx.%5C%5Cy.%5C%5Cf.f+x+y%22%2C%22FIRST%3D%5C%5Cp.p+TRUE%22%2C%22SECOND%3D%5C%5Cp.p+FALSE%22%2C%22%23+Using+pairs%2C+declaring+a+predecessor+function+is+easy%22%2C%22PHI%3D%5C%5Cx.PAIR+%28SECOND+x%29+%28SUCC+%28SECOND+x%29%29+%23+Phi+maps+%28n%2C+k%29+to+%28k%2C+k%2B1%29%22%2C%22PRED%3D%5C%5Cn.FIRST+%28n+PHI+%28PAIR+0+0%29%29%22%2C%22PRED%28SUCC%28SUCC%28SUCC%28SUCC+0%29%29%29%29+%23+Should+result+in+f%5E3%22%5D'
    ]
] as const

export function App(): React.ReactElement {
    const url = new URLSearchParams(window.location.search)
    const logParam = url.get('log')
    const log = React.useMemo(() => JSON.parse(decodeURIComponent(logParam ?? '[]')), [logParam])
    return <div className="App">
        <div className="examples">
            {examples.map(([name, value]) => 
                <a href={value} key={name}>{name}</a>
            )}
        </div>
        <Repl init={log} share={log => {
            if (log.length == 0) url.delete('log')
            else url.set('log', JSON.stringify(log))
            window.location.search = url.toString()
        }} />
    </div>
}