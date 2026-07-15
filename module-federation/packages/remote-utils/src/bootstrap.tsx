import React from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button'
import Counter from './components/Counter'
import './index.css'

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Utils Remote - Module Federation</h2>
      <h3>Button Component</h3>
      <Button onClick={() => alert('Clicked!')}>Click me</Button>
      <h3>Counter Component</h3>
      <Counter />
    </div>
  )
}

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}