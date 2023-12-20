import React from "react"

export default function useLink(rel: string, href: string, type?: string | undefined) {
	const node = React.useRef<HTMLLinkElement>(document.createElement("link"))
	React.useEffect(() => {
		node.current.setAttribute('data-ssr', 'data-ssr')
		document.head.appendChild(node.current)
		return () => node.current.remove()
	}, [])
	React.useEffect(() => { node.current.setAttribute('rel', rel) }, [rel])
	React.useEffect(() => { node.current.setAttribute('href', href) }, [href])
	React.useEffect(() => {
		if (type) node.current.setAttribute('type', type)
		else node.current.removeAttribute('type')
	}, [type])
}