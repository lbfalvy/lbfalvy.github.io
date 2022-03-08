import React from "react"

export default function useOG(name: string, content?: string | undefined) {
    const node = React.useRef<HTMLMetaElement>(document.createElement('meta'))
    React.useEffect(() => {
        document.head.appendChild(node.current)
        return () => node.current.remove()
    }, [])
    React.useEffect(() => { node.current.setAttribute('property', `og:${name}`) }, [name])
    React.useEffect(() => { node.current.setAttribute('content', content ?? '') }, [content])
}