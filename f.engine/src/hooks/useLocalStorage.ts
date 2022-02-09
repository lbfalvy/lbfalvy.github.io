import React from "react"

export function useLocalStorage(key: string): [string | null, (s?: string | null | undefined) => void]
export function useLocalStorage(key: string, def: string): [string, (s: string) => void]
export function useLocalStorage(key: string, def?: string): [string, (s?: string | null | undefined) => void] {
    if (!window.localStorage.getItem(key) && def)
        window.localStorage.setItem(key, def)
    const [value, change] = React.useState(window.localStorage.getItem(key))
    React.useEffect(() => {
        function handle(e: StorageEvent) {
            if (e.key == key) change(e.newValue)
        }
        window.addEventListener('storage', handle)
        return () => window.removeEventListener('storage', handle)
    }, [])
    return [
        value!, 
        s => {
            if (s === undefined || s === null)
                window.localStorage.removeItem(key)
            else window.localStorage.setItem(key, s)
            change(s ?? null)
        }
    ]
} 