declare module 'remoteReact/App' {
  import type { ComponentType } from 'react'
  const App: ComponentType
  export default App
}

declare module 'remoteReact/Button' {
  import type { ComponentType, ReactNode } from 'react'
  interface ButtonProps {
    children: ReactNode
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'danger'
  }
  const Button: ComponentType<ButtonProps>
  export default Button
}

declare module 'remoteVue/App' {
  import type { ComponentType } from 'react'
  const App: ComponentType
  export default App
}

declare module 'remoteUtils/Button' {
  import type { ComponentType, ReactNode } from 'react'
  interface ButtonProps {
    children: ReactNode
    onClick?: () => void
  }
  const Button: ComponentType<ButtonProps>
  export default Button
}

declare module 'remoteUtils/Counter' {
  import type { ComponentType } from 'react'
  const Counter: ComponentType
  export default Counter
}