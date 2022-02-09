import React from "react";
import { Repl } from "./Repl";
import './App.scss';
import { Expression } from "./Expression";
import { tokenize } from "./expressions";

const examples = [
    [
        'Introduction',
        '?log=%5B%22%23+Lambda+calculus+describes+functions+with+substitution.%22%2C%22%23+A+lambda+function+consists+of+a+variable+name+and+a+body.%22%2C%22%5C%5Cx.x+%2B+1%22%2C%22%23+On+evaluation%2C+all+occurences+of+the+name+in+the+body+are+replaced+with+the+argument.%22%2C%22%28%5C%5Cx.x+%2B+1%29+2%22%2C%22%23+For+convenience+we+often+name+these+expressions%2C+however+recursion+isn%27t+allowed.%22%2C%22F%3D%5C%5Cx.1+%2F+x%22%2C%22%23+This+parser+doesn%27t+recognize+any+operators+not+normally+present+in+lambda+calculus%2C+so+surround+names+with+a+space.%22%2C%22%23+Multi-parameter+functions+are+expressed+as+functions+that+return+functions%22%2C%22ADD%3D%5C%5Cx.%5C%5Cy.x+%2B+y%22%2C%22%23+Functions+are+called+by+simply+listing+the+arguments+after+the+function+name%22%2C%22ADD+3+5%22%5D'
    ],
    [
        'Boolean logic',
        '?log=%5B%22TRUE%3D%5C%5Cx.%5C%5Cy.x%22%2C%22FALSE%3D%5C%5Cx.%5C%5Cy.y%22%2C%22NOT%3D%5C%5Cx.x+FALSE+TRUE%22%2C%22NOT+TRUE%22%2C%22AND%3D%5C%5Cx.%5C%5Cy.x+y+x%22%2C%22OR%3D%5C%5Cx.%5C%5Cy.x+x+y%22%5D'
    ],
    [
        'Numbers Ⅰ.',
        '?log=%5B%22%23%20Numbers%20are%20represented%20by%20a%20function%20that%20applies%20a%20parameter%20N%20times%22%2C%220%3D%5C%5Cf.%5C%5Cx.x%22%2C%221%3D%5C%5Cf.%5C%5Cx.f%20x%22%2C%222%3D%5C%5Cf.%5C%5Cx.f%20(f%20x)%22%2C%22%23%20N%2B1%20can%20be%20obtained%20from%20N%20by%20applying%20the%20parameter%20one%20more%20time%22%2C%22SUCC%3D%5C%5Cn.%5C%5Cf.%5C%5Cx.f(n%20f%20x)%22%2C%22SUCC%202%22%2C%223%3DSUCC%202%22%2C%22%23%20The%20n-th%20composition%20of%20f%20composed%20with%20the%20k-th%20composition%20of%20f%20gives%20the%20n%2Bk-th%20composition%20of%20f%22%2C%22PLUS%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.%5C%5Cx.n%20f%20(k%20f%20x)%22%2C%22PLUS%202%202%22%2C%22%23%20This%20multiplication%20function%20should%20not%20come%20as%20a%20surprise%22%2C%22MULT%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.n%20(k%20f)%22%2C%22MULT%202%203%22%5D'
    ],
    [
        "Pairs",
        '?log=%5B%22TRUE%3D%5C%5Cx.%5C%5Cy.x%3BFALSE%3D%5C%5Cx.%5C%5Cy.y%3B0%3D%5C%5Cf.%5C%5Cx.x%3BSUCC%3D%5C%5Cn.%5C%5Cf.%5C%5Cx.f%28n+f+x%29%22%2C%22%23+Pair+%28or+2-tuples%29+have+various+use+cases%2C+and+they%27re+a+fine+demonstration+of+how+closures+can+be+used+to+construct+datastructures.%22%2C%22PAIR%3D%5C%5Cx.%5C%5Cy.%5C%5Cf.f+x+y%22%2C%22FIRST%3D%5C%5Cp.p+TRUE%22%2C%22SECOND%3D%5C%5Cp.p+FALSE%22%2C%22%23+Using+pairs%2C+declaring+a+predecessor+function+is+easy%22%2C%22PHI%3D%5C%5Cx.PAIR+%28SECOND+x%29+%28SUCC+%28SECOND+x%29%29+%23+Phi+maps+%28n%2C+k%29+to+%28k%2C+k%2B1%29%22%2C%22PRED%3D%5C%5Cn.FIRST+%28n+PHI+%28PAIR+0+0%29%29%22%2C%22PRED%28SUCC%28SUCC%28SUCC%28SUCC+0%29%29%29%29+%23+Should+result+in+f%5E3%22%5D'
    ],
    [
        "Numbers Ⅱ.",
        '?log=%5B%22TRUE%3D%5C%5Cx.%5C%5Cy.x%3BFALSE%3D%5C%5Cx.%5C%5Cy.y%3B0%3D%5C%5Cf.%5C%5Cx.x%3BSUCC%3D%5C%5Cn.%5C%5Cf.%5C%5Cx.f%28n+f+x%29%3BPLUS%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.%5C%5Cx.n+f+%28k+f+x%29%3BMULT%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.n+%28k+f%29%3BPAIR%3D%5C%5Cx.%5C%5Cy.%5C%5Cf.f+x+y%3BFIRST%3D%5C%5Cp.p+TRUE%3BNOT%3D%5C%5Cx.x+FALSE+TRUE%3BAND%3D%5C%5Cx.%5C%5Cy.x+y+x%3BOR%3D%5C%5Cx.%5C%5Cy.x+x+y%3BSECOND%3D%5C%5Cp.p+FALSE%3BPHI%3D%5C%5Cx.PAIR+%28SECOND+x%29+%28SUCC+%28SECOND+x%29%29%3BPRED%3D%5C%5Cn.FIRST+%28n+PHI+%28PAIR+0+0%29%29%22%2C%22%23+Now+that+we+have+a+predecessor+function%2C+a+few+other+numerical+functions+can+be+defined%22%2C%22SUB%3D%5C%5Cn.%5C%5Ck.k+PRED+n%22%2C%22ISZERO%3D%5C%5Cn.n+%28%5C%5Cx.FALSE%29+TRUE%22%2C%22%23+And+finally+comparison+predicates%22%2C%22LEQ%3D%5C%5Cn.%5C%5Ck.ISZERO+%28SUB+n+k%29%22%2C%22EQ%3D%5C%5Cn.%5C%5Ck.AND+%28LEQ+n+k%29+%28LEQ+k+n%29%22%2C%22%23+Note+that+subtracting+a+large+number+from+a+smaller+one+yields+zero+due+to+our+encoding%22%2C%221%3DSUCC+0%3B2%3DSUCC+1%3B3%3DSUCC+2%22%2C%22EQ+3+%28PLUS+1+2%29%22%5D'
    ],
    [
        "Recursion",
        '?log=%5B%22TRUE%3D%5C%5Cx.%5C%5Cy.x%3BFALSE%3D%5C%5Cx.%5C%5Cy.y%3B0%3D%5C%5Cf.%5C%5Cx.x%3BSUCC%3D%5C%5Cn.%5C%5Cf.%5C%5Cx.f%28n+f+x%29%3BPLUS%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.%5C%5Cx.n+f+%28k+f+x%29%3BMULT%3D%5C%5Cn.%5C%5Ck.%5C%5Cf.n+%28k+f%29%3BPAIR%3D%5C%5Cx.%5C%5Cy.%5C%5Cf.f+x+y%3BFIRST%3D%5C%5Cp.p+TRUE%3BNOT%3D%5C%5Cx.x+FALSE+TRUE%3BAND%3D%5C%5Cx.%5C%5Cy.x+y+x%3BOR%3D%5C%5Cx.%5C%5Cy.x+x+y%3BSECOND%3D%5C%5Cp.p+FALSE%3BPHI%3D%5C%5Cx.PAIR+%28SECOND+x%29+%28SUCC+%28SECOND+x%29%29%3BPRED%3D%5C%5Cn.FIRST+%28n+PHI+%28PAIR+0+0%29%29%3BSUB%3D%5C%5Cn.%5C%5Ck.k+PRED+n%3BISZERO%3D%5C%5Cn.n+%28%5C%5Cx.FALSE%29+TRUE%3BLEQ%3D%5C%5Cn.%5C%5Ck.ISZERO+%28SUB+n+k%29%3BEQ%3D%5C%5Cn.%5C%5Ck.AND+%28LEQ+n+k%29+%28LEQ+k+n%29%3B1%3DSUCC+0%3B2%3DSUCC+1%3B3%3DSUCC+2%22%2C%22%23+Intuitively%2C+we+might+define+the+factorial+function+like+this%22%2C%22FAC%3D%5C%5Cn.ISZERO+n+1+%28MULT+n+%28FAC+%28PRED+n%29%29%29%22%2C%22%23+%28+note%3A+this+is+a+really+long+calculation%2C+set+Max+iterations+to+5000+before+you+test+it+%29%22%2C%22%23+The+fact+that+this+definition+works+is+actually+a+shortcoming+of+this+interpreter%2C+as+self-referential+definitions+aren%27t+allowed+in+lambda+calculus%22%2C%22%23+Creating+loops+is+generally+not+difficult%22%2C%22%28%5C%5Cx.x+x%29%28%5C%5Cx.x+x%29%22%2C%22%23+The+self-reference+can+be+broken+by+passing+recursive+functions+as+their+own+first+argument%22%2C%22FAC%3D%5C%5Cr.%5C%5Cn.ISZERO+n+1+%28MULT+n+%28r+r+%28PRED+n%29%29%29+%23+Invoked+as+FAC+FAC+3%22%2C%22%23+Ideally%2C+we+should+have+a+function+that+abstracts+this+step%2C+a+variant+of+the+above+infinite+loop+example+that+also+passes+control+to+some+loop+body+on+every+iteration%22%2C%22Y%3D%5C%5Cg.%28%5C%5Cx.g+%28x+x%29%29%28%5C%5Cx.g+%28x+x%29%29%22%2C%22%23+Y+is+the+fixed+point+of+any+function+-+try+running+%60Y+foo%60+with+an+iteration+limit+of+10%21%22%2C%22%23+With+this%2C+we+can+finally+define+FAC+in+a+legal+and+convenient+way%22%2C%22FAC%3D%5C%5Cn.Y+%28%5C%5Cr.%5C%5Ck.ISZERO+k+1+%28MULT+k+%28r+%28PRED+k%29%29%29%29+n%22%2C%22%23+Although+the+order+of+evaluation+doesn%27t+normally+make+a+difference%2C+with+recursive+functions+it%27s+crucial+that+we+always+evaluate+the+outermost+expression+first%2C+otherwise+we+might+end+up+recursing+infinitely+on+dead+branches.%22%5D'
    ]
] as const

export function App(): React.ReactElement {
    const url = new URLSearchParams(window.location.search)
    const logParam = url.get('log')
    const log = React.useMemo(() => JSON.parse(decodeURIComponent(logParam ?? '[]')), [logParam])
    return <div className="App">
        <div className="menu">
            <h1><Expression expr={['λ', ['literal', 'f'], '.', ['literal', 'engine']]} /></h1>
            {examples.map(([name, value]) => 
                <a href={value} key={name}>{name}</a>
            )}
            <p>
                Most of the explanations were copied from Wikipedia
            </p>
        </div>
        <Repl init={log} share={log => {
            if (log.length == 0) url.delete('log')
            else url.set('log', JSON.stringify(log))
            window.location.search = url.toString()
        }} />
    </div>
}