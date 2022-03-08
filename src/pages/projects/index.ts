import Project from './Project'

// There's no good way to type this line
// @ts-ignore
const articles = import.meta.globEager('./*.tsx')

export default Object.values(articles).map(x => 
    (x as { default: Project }).default
)