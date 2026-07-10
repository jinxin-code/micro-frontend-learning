import { mountRootParcel } from 'single-spa'
import { createRoot } from 'react-dom/client'
import App from './App'

export async function bootstrap(props: unknown) {
  console.log('React app bootstrap:', props)
}

export async function mount(props: { domElement?: HTMLElement } & Record<string, unknown>) {
  console.log('React app mount:', props)
  
  const container = props.domElement || document.getElementById('app')
  if (!container) {
    throw new Error('No container found for React app')
  }
  
  const root = createRoot(container)
  root.render(<App />)
  
  return {
    unmount: () => {
      root.unmount()
    }
  }
}

export async function unmount(props: { domElement?: HTMLElement }) {
  console.log('React app unmount:', props)
}