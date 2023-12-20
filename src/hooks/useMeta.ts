import React from "react"

export default function useMeta(name: string, content?: string | undefined) {
	const node = React.useRef<HTMLMetaElement>(document.createElement('meta'))
	React.useEffect(() => {
		node.current.setAttribute('data-ssr', 'data-ssr')
		document.head.appendChild(node.current)
		return () => node.current.remove()
	}, [])
	React.useEffect(() => { node.current.name = name }, [name])
	React.useEffect(() => { node.current.setAttribute('content', content ?? '') }, [content])
}