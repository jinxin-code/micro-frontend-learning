import { bootstrap, mount, unmount } from './qiankun'
import './index.css'
import App from './App'

if (!(window as unknown as Record<string, unknown>).__POWERED_BY_QIANKUN__) {
  const root = document.getElementById('root')
  if (root) {
    import('react-dom/client').then(({ createRoot }) => {
      createRoot(root).render(<App />)
    })
  }
}

export { bootstrap, mount, unmount }