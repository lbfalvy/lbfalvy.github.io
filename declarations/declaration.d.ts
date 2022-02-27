
declare module '@src:/*' {
    export const plainText: string
}


declare module '*.module.scss' {
    const content: {[className: string]: string};
    export default content;
}

declare module '*.scss' {}