import React from "react"

let semaphore = false

const originalTitle = document.title

export function useTitle(title: string): void {
    React.useEffect(() => {
        if (semaphore) throw new Error('A title hook is already present in the application')
        semaphore = true
        document.title = title
        return () => {
            semaphore = false
            document.title = originalTitle
        }
    })
}