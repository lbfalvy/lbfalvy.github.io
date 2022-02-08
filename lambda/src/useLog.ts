import React from "react"

export type LogAction<T> = 
    | ['set', T[]]
    | ['push', T]

export function useLog<T>(init: T[] = []): [T[], (action: LogAction<T>) => void] {
    return React.useReducer(
        (log: T[], cmd: LogAction<T>) => {
            switch (cmd[0]) {
                case 'set': return cmd[1]
                case 'push': return [...log, cmd[1]]
            }
        }, 
        init
    )
}