import useMeta from "./useMeta";
import useOG from "./useOG";
import { useTitle } from "./useTitle";

export default function useMetadata(
    type: 'article' | 'website',
    title: string,
    description: string,
    keywords: string[],
    author?: string|undefined,
    image?: string|undefined,
) {
    useTitle(`${author ?? 'lbfalvy'} - ${title}`)
    useMeta('author', author)
    useMeta('description', description)
    useMeta('keywords', ['lbfalvy','lawrence bethlenfalvy', ...keywords].join(','))
    useOG('title', title)
    useOG('type', type)
    useOG('description', description)
    useOG('image', image)

}