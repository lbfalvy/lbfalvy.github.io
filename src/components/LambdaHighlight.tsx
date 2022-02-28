import { classList } from "@lbfalvy/react-utils";
import React, { CSSProperties } from "react";
import style from './LambdaHighlight.module.scss'

type LambdaToken = ['lambda', string, Token[], Token[]]
type Token =
    | ['comment', string]
    | LambdaToken
    | ['operator', string]
    | ['name', string]
    | ['whitespace', string]
    | ['placeholder', string]
    | ['macro', string]

function matchParen(expr: string, greedy = false): string {
    for (var i = 0, lvl = 0;
        0 <= lvl && i < expr.length;
        i++) {
        if (expr[i] == '(' || expr[i] == '\\') lvl++
        else if (expr[i] == ')' || expr[i] == '.') lvl--
        else if (greedy && expr[i] == '\n' && lvl == 0) break
    }
    return expr.slice(0, i)
}

function parseLambda(expr: string): LambdaToken {
    expr = expr.slice(1) // Get rid of \
    const nameMatch = /^[a-zA-Z0-9_]+\s*/.exec(expr)
    if (!nameMatch) throw new Error(`Missing name in "${expr}"`)
    const name = nameMatch[0].trim()
    const afterName = nameMatch[0].length
    let type: Token[] = []
    let afterType = afterName
    if (expr[afterName] == ':') {
        const typeStr = matchParen(expr.slice(afterName + 1)).slice(0, -1)
        console.log(typeStr)
        type = tokenizeExp(typeStr)
        afterType += typeStr.length + 1
    }
    if (expr[afterType] != '.') throw new Error(`Missing dot in "${expr.slice(afterType)}"`)
    const body = tokenizeExp(expr.slice(afterType + 1))
    return ['lambda', name, type, body]
}

// Problem
// \f:\a:a.a.\a:a.a

function tokenizeExp(expr: string): Token[]  {
    if (expr == '') return []
    const ws = /^(\s|\n)+/.exec(expr)
    if (ws) return [['whitespace', ws[0]], ...tokenizeExp(expr.slice(ws[0].length))]
    const name = /^[a-zA-Z0-9_]+/.exec(expr)
    if (name) return [['name', name[0]], ...tokenizeExp(expr.slice(name[0].length))]
    const mlcmt = /^\-\-\[.*?\]\-\-/.exec(expr)
    if (mlcmt) return [['comment', mlcmt[0]], ...tokenizeExp(expr.slice(mlcmt[0].length))]
    const slcmt = /^--.*?(?:\n|$)/.exec(expr)
    if (slcmt) return [['comment', slcmt[0]], ...tokenizeExp(expr.slice(slcmt[0].length))]
    if (expr.startsWith('\\')) {
        const lambda = matchParen(expr)
        return [parseLambda(lambda), ...tokenizeExp(expr.slice(lambda.length))]
    }
    const ph = /^\$[a-zA-Z0-9_]+/.exec(expr)
    if (ph) return [['placeholder', ph[0]], ...tokenizeExp(expr.slice(ph[0].length))]
    const macro = /^<?=((\d+(\.\d+)?)?=>?)?/.exec(expr)
    if (macro) return [['macro', macro[0]], ...tokenizeExp(expr.slice(macro[0].length))]
    const opChars = /^[^\sa-zA-Z0-9_\$\\]+/.exec(expr)
    if (opChars) return [['operator', opChars[0]], ...tokenizeExp(expr.slice(opChars[0].length))]
    throw new Error(`Logic error: none of the regices in a complete cover matched "${expr}"`)
}

const varLvlCtx = React.createContext<Record<string, number>>({})

export default function LambdaHighlight({ children }: { children: string | Token[] }): React.ReactElement {
    const vlvlv = React.useContext(varLvlCtx)
    const nextLvl = Object.keys(vlvlv).length + 1
    let tokens: Token[]
    if (typeof children == 'string') {
        tokens = tokenizeExp(children)
        console.log(tokens)
    } else tokens = children
    return <code className={style.main}>
        {tokens.map(([name, value, ...extras], i) => { switch (name) {
            case 'comment': return <span className={style.comment}>{value}</span>
            case 'name': return <span 
                className={classList(style.name, vlvlv[value] || style.global)}
                style={vlvlv[value] ? {
                    '--level': `${vlvlv[value]}`
                } as CSSProperties : undefined}
            >
                {value}
            </span>
            case 'operator': return <span className={style.operator}>{value}</span>
            case 'whitespace': return <span>{value}</span>
            case 'placeholder': return <span className={style.placeholder}>{value}</span>
            case 'macro': return <span className={style.macro}>{value}</span>
            case 'lambda': return <varLvlCtx.Provider value={{
                ...vlvlv, [value]: nextLvl
            }}>
                <span className={style.lambda} data-name={value}>
                    <span className={style.bkslash}>\</span>
                    <span className={classList(style.param, style.name)}
                        style={{
                            '--level': `${nextLvl}`
                        } as CSSProperties}
                    >{value}</span>
                    {extras[0]!.length? <>
                        <span className={style.colon}>:</span>
                        <span>
                            <LambdaHighlight>{extras[0]!}</LambdaHighlight>
                        </span>
                    </> :null}
                    <span className={style.dot}>.</span>
                    <span>
                        <LambdaHighlight>{extras[1]!}</LambdaHighlight>
                    </span>
                </span>
            </varLvlCtx.Provider>
        }})}
    </code>
}