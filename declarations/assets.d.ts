declare module '*.jpg' {
    const url: string
    export default url
}

declare module '*.svg' {
    const cmpt: React.ComponentType
    export default cmpt;
}