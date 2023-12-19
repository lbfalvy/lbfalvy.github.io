interface GlobalObject {
  ssrProceed?: () => undefined
}

export function ssrReady(): undefined {
  console.log("Ssr ready!")
  const global = globalThis as any as GlobalObject;
  global.ssrProceed?.()
}