import './index.css'
import './App.css'
import App from './App'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}