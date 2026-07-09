import { useLocation } from 'umi'

export default function Micro() {
  const location = useLocation()

  const titles: Record<string, string> = {
    '/react': '⚛️ React 微应用',
    '/vue': '💚 Vue 微应用',
    '/static': '📄 静态微应用'
  }

  return (
    <div className="micro-app-container">
      <h2>{titles[location.pathname] || location.pathname}</h2>
      <div id="subapp-viewport"></div>
    </div>
  )
}