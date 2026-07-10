import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import App from './App'

let root: Root | null = null

export async function bootstrap() {
  console.log('React 微应用 bootstrap')
}

export async function mount(props: { container: HTMLElement }) {
  console.log('React 微应用 mount', props)
  const container = props.container || document.getElementById('root')
  if (container) {
    root = createRoot(container)
    root.render(<App />)
  }
}

export async function unmount() {
  console.log('React 微应用 unmount')
  if (root) {
    root.unmount()
    root = null
  }
}