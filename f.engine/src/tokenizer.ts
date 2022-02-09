export function tokenizer(operators: readonly string[]): (source: string) => string[] {
    const opChars = new Set(operators.flatMap(s => s.split('')))
    function tokenize(source: string): string[] {
        if (source == '') return []
        if (source.startsWith(' ')) return tokenize(source.substring(1))
        if (opChars.has(source[0])) {
            for (const op of operators)
                if (source.startsWith(op))
                    return [op, ...tokenize(source.slice(op.length))]
            throw new Error('Unknown operator')
        }
        let end = 0 
        for (;end < source.length; end++)
            if (source[end] == ' ' || opChars.has(source[end]))
                return [source.slice(0, end), ...tokenize(source.slice(end))]
        return [source]
    }
    return tokenize
}