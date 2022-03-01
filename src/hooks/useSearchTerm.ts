import { useSearchParams } from "react-router-dom"

export default function useSearchTerm(name: string, defaultValue?: string): [string | undefined, (s: string) => void] {
    const [params, setParams] = useSearchParams()
    return [
        params.get(name) ?? defaultValue,
        s => {
            params.set(name, s)
            setParams(params)
        }
    ]
}