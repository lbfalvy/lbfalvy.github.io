import { EvalSteps, evaluate, normalize, stringify, Token, tokenEq, tokenize, wrap } from "./expressions"
import { addToStore, createStore, DefStore, SubDetails, trySub } from "./definitions"

export type LogEntry = EvalSteps | SubDetails<Token[]>

function evalLoop(expression: Token[], store: DefStore<Token[]>, limit = 10): [boolean, Token[], LogEntry[]] {
    const log: LogEntry[] = []
    for (let i = 0; i < limit; i++) {
        try {
            const [evlResult, steps] = evaluate(expression)
            const subResult = trySub(expression, store)
            if (!subResult && !steps.success) return [true, expression, log]
            const evlPos = steps.lambda.prefix.length
            if (!subResult || evlPos < subResult.left.length) {
                if (tokenEq(evlResult, expression))
                    return [false, expression, log]
                log.push(steps)
                expression = evlResult
            } else {
                log.push(subResult)
                expression = normalize([
                    ...subResult.left, 
                    ...wrap(subResult.substitute), 
                    ...subResult.right
                ])
            }
        } catch(e) {
            throw new Error(`Failed to evaluate "${stringify(expression)}": ${(e as Error).toString()}`)
        }
    }
    return [false, expression, log]
}

export type State = DefStore<Token[]>

export function createState(): State {
    return createStore()
}

export function execute(state: State, command: string, limit = 10): [boolean, string, LogEntry[], State] {
    if (command.includes('#'))
        command = command.substring(0, command.indexOf('#'))
    const instructions = command.split(';')
    const values: string[] = []
    const logs: LogEntry[] = []
    let allHalts = true
    for (const instruction of instructions) {
        const assign = /^([a-zA-Z0-9_]+)=/.exec(instruction)
        if (assign) {
            const name = assign[1]
            const expression = instruction.substring(assign[0].length)
            state = addToStore(state, name, tokenize(expression))
        } else {
            const [halts, value, log] = evalLoop(tokenize(instruction), state, limit)
            allHalts &&= halts
            values.push(stringify(value))
            logs.push(...log)
        }
    }
    return [allHalts, values.join(';'), logs, state]
}