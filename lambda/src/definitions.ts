import { Token, tokenize } from "./expressions"

export type DefEntry<T> = {
    value: T
}
export type DefStore<T> = {
    [s in string]?: DefEntry<T>
}

export function createStore<T>(): DefStore<T> {
    return {}
}

export function addToStore<T>(store: DefStore<T>, key: string, value: T): DefStore<T> {
    return {
        ...store,
        [key]: { value }
    }
}

function inStore<T>(store: DefStore<T>, key: string): DefEntry<T> | undefined {
    return store[key]
}

export type SubDetails<T> = {
    type: 'SubDetails'
    name: string
    definition: DefEntry<T>
    expression: Token[]
    left: Token[]
    right: Token[]
    substitute: T
}

export function trySub<T>(expression: Token[], store: DefStore<T>): SubDetails<T> | false {
    for (let i = 0; i < expression.length; i++) {
        const token = expression[i]
        if (Array.isArray(token) && token[0] == 'literal') {
            const definition = inStore(store, token[1])
            if (!definition) continue
            const left = expression.slice(0, i)
            const right = expression.slice(i + 1)
            return {
                type: 'SubDetails',
                name: token[1], definition,
                expression,
                left, right,
                substitute: definition.value
            }
        }
    }
    return false
}