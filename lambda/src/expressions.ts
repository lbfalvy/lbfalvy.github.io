import { tokenizer } from "./tokenizer";

export type Token = ['literal', string] | '\\' | '.' | '(' | ')'

const tokens = ['\\', '.', '(', ')'] as const
const splitTokens = tokenizer(tokens)

export function tokenize(expression: string): Token[] {
    return splitTokens(expression).map(s => tokens.includes(s as any) ? s as Token : ['literal', s])
}

export function stringify(data: Token[]): string {
    return data.map((t, i) => {
        if (typeof t == 'string') return t
        const next = data[i + 1]
        if (Array.isArray(next)) return `${t[1]} `
        else return t[1]
    }).join('')
}

export function tokenEq(a: Token[], b: Token[]): boolean {
    return a.length == b.length && a.every((x, i) => {
        const y = b[i]
        return x == y || Array.isArray(x) && Array.isArray(y) && x[1] == y[1]
    })
}

export function findParenPair(data: Token[]): number {
    let i = 0;
    while (data[++i] != ')')
        if (data[i] == '(')
            i += findParenPair(data.slice(i))
        else if (data.length <= i)
            throw new Error(`No end to outermost paren in "${JSON.stringify(data)}"`)
    return i
}

export function wrap(data: Token[]): Token[] {
    if (data[0] == '(' && data[data.length - 1] == ')') return data
    return ['(', ...data, ')']
}

export type LambdaResult = {
    type: 'LambdaResult'
    prefix: Token[]
    param: string
    body: Token[]
    argument: Token[]
    postfix: Token[]
}

const defaultLres: LambdaResult = { type: 'LambdaResult',
    prefix: [], param: '', body: [], argument: [], postfix: []
}

export function parseLambda(data: Token[]): LambdaResult {
    const lambdaPos = data.indexOf('\\')
    // An expression can only be further evaluated if there is a parenthesized lambda
    if (lambdaPos <= 0 || data[lambdaPos - 1] != '(')
        return { ...defaultLres, prefix: data }
    const param = data[lambdaPos + 1]
    if (!Array.isArray(param) || data[lambdaPos + 2] != '.')
        throw new Error('Malformed param name')
    const bodyEnd = lambdaPos + findParenPair(data.slice(lambdaPos))
    const afterBody = bodyEnd + 1
    const [argStart, argEnd] = data[afterBody] == '('
        ? [afterBody, afterBody + findParenPair(data.slice(afterBody)) + 1]
        : [afterBody, afterBody + 1]
    return {
        type: 'LambdaResult',
        prefix: data.slice(0, lambdaPos - 1),
        param: param[1],
        body: data.slice(lambdaPos + 3, bodyEnd),
        argument: data.slice(argStart, argEnd),
        postfix: data.slice(argEnd)
    }
}

export function sliceAt(data: Token[], name: string): Token[][] {
    const split = data.findIndex(l => Array.isArray(l) && l[1] == name)
    if (split == -1) return [data]
    return [data.slice(0, split), ...sliceAt(data.slice(split + 1), name)]
}

export type EvalSteps = {
    type: 'EvalSteps'
    expression: Token[]
    lambda: LambdaResult
    bodySections: Token[][]
    substitute: Token[]
}

export function evaluate(expression: Token[]): [Token[], EvalSteps] {
    const lambda = parseLambda(expression)
    const { prefix, param, body, argument, postfix } = lambda
    const substitute = wrap(argument)
    const bodySections = sliceAt(body, param)
    const result = bodySections.reduce((l, r) => [...l, ...substitute, ...r])
    return [
        [...prefix, ...result, ...postfix],
        {
            type: 'EvalSteps',
            expression: expression,
            lambda, 
            bodySections, 
            substitute
        }
    ]
}