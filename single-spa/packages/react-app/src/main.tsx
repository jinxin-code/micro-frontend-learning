import './index.css'

if (!window.singleSpaNavigate) {
  import('./App').then(async ({ default: App }) => {
    const { createRoot } = await import('react-dom/client')
    const root = document.getElementById('app')
    if (root) {
      createRoot(root).render(<App />)
    }
  })
}

export { bootstrap, mount, unmount } from './single-spa'