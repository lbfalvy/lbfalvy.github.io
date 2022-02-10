import React from "react"

let semaphore = false

export function useTitle(title: string): void {
    const { current: oldTitle } = React.useRef(document.title)
    React.useEffect(() => {
        if (semaphore) throw new Error('A title hook is already present in the application')
        semaphore = true
        document.title = title
        return () => {
            semaphore = false
            document.title = oldTitle
        }
    })
}