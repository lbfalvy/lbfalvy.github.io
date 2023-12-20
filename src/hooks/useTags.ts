import React from "react"

export default function useTags<T extends { tags: string[] }>(
	items: T[],
	filterStr: string | undefined, 
	setFilterStr: (s: string) => void
): [T[], string[], string[], (s: string) => void] {
	const categories = [...new Set(items.flatMap(x => x.tags))]
	const filter = filterStr?.split(',')?.filter(x => x.length) ?? []
	const toggleFilter = React.useCallback((s: string) => {
		if (filter.includes(s))
			setFilterStr(filter.filter(x => x != s).join(','))
		else setFilterStr(`${filter.join(',')},${s}`)
	}, [filter])
	const list = items
		.filter(x => filter.every(t => x.tags.includes(t)))
	return [list, categories, filter, toggleFilter]
}