import Metadata from './Metadata'
// export { default as Metadata } from './Metadata'

// There's no good way to type this line
// @ts-ignore
const articles = import.meta.glob('./*.tsx', { eager: true })

export default Object.values(articles).map(x => 
	(x as { default: Metadata }).default
)