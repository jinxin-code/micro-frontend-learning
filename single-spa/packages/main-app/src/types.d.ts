declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, unknown>
  export default component
}

declare module '//localhost:8300/main.js' {
  export const bootstrap: (props: unknown) => Promise<void>
  export const mount: (props: unknown) => Promise<void>
  export const unmount: (props: unknown) => Promise<void>
}

declare module '//localhost:8301/main.js' {
  export const bootstrap: (props: unknown) => Promise<void>
  export const mount: (props: unknown) => Promise<void>
  export const unmount: (props: unknown) => Promise<void>
}

declare module '//localhost:8302/main.js' {
  export const bootstrap: (props: unknown) => Promise<void>
  export const mount: (props: unknown) => Promise<void>
  export const unmount: (props: unknown) => Promise<void>
}