import { useState, lazy, Suspense } from 'react'

const RemoteReactApp = lazy(() => import('remoteReact/App'))
const RemoteVueApp = lazy(() => import('remoteVue/App'))
const RemoteButton = lazy(() => import('remoteUtils/Button'))
const RemoteCounter = lazy(() => import('remoteUtils/Counter'))

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [count, setCount] = useState(0)

  return (
    <div className="host-app">
      <nav className="nav-bar">
        <h1 className="logo">Host 主应用 (Module Federation)</h1>
        <ul className="nav-links">
          <li>
            <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>首页</button>
          </li>
          <li>
            <button className={activeTab === 'react' ? 'active' : ''} onClick={() => setActiveTab('react')}>React 远程组件</button>
          </li>
          <li>
            <button className={activeTab === 'vue' ? 'active' : ''} onClick={() => setActiveTab('vue')}>Vue 远程组件</button>
          </li>
          <li>
            <button className={activeTab === 'utils' ? 'active' : ''} onClick={() => setActiveTab('utils')}>共享工具组件</button>
          </li>
        </ul>
      </nav>
      <main className="content">
        {activeTab === 'home' && (
          <div className="home">
            <h2>欢迎来到 Module Federation 主应用</h2>
            <div className="cards">
              <div className="card">
                <h3>🏠 Host 主应用</h3>
                <p>基于 React 18 + Webpack 5 构建</p>
                <p>通过 remotes 配置加载远程模块</p>
              </div>
              <div className="card">
                <h3>⚛️ React Remote</h3>
                <p>运行在 localhost:8402</p>
                <p>演示 React 远程组件加载</p>
              </div>
              <div className="card">
                <h3>💚 Vue Remote</h3>
                <p>运行在 localhost:8403</p>
                <p>演示 Vue 远程组件加载</p>
              </div>
              <div className="card">
                <h3>🔧 Utils Remote</h3>
                <p>运行在 localhost:8404</p>
                <p>演示共享工具组件</p>
              </div>
            </div>
            <div className="concepts">
              <h3>📚 Module Federation 核心概念</h3>
              <ul>
                <li><strong>exposes</strong>: Remote 应用暴露的模块</li>
                <li><strong>remotes</strong>: Host 应用引用的远程模块</li>
                <li><strong>shared</strong>: 共享的依赖（如 React、Vue）</li>
                <li><strong>singleton</strong>: 确保依赖只有一个实例</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'react' && (
          <div className="remote-container">
            <h2>⚛️ React 远程组件</h2>
            <Suspense fallback={<div>Loading React remote...</div>}>
              <RemoteReactApp />
            </Suspense>
          </div>
        )}

        {activeTab === 'vue' && (
          <div className="remote-container">
            <h2>💚 Vue 远程组件</h2>
            <Suspense fallback={<div>Loading Vue remote...</div>}>
              <RemoteVueApp />
            </Suspense>
          </div>
        )}

        {activeTab === 'utils' && (
          <div className="remote-container">
            <h2>🔧 共享工具组件</h2>
            <div className="utils-grid">
              <div className="util-card">
                <h3>远程按钮组件</h3>
                <Suspense fallback={<div>Loading Button...</div>}>
                  <RemoteButton onClick={() => setCount(count + 1)}>点击增加计数</RemoteButton>
                  <p>当前计数: {count}</p>
                </Suspense>
              </div>
              <div className="util-card">
                <h3>远程计数器组件</h3>
                <Suspense fallback={<div>Loading Counter...</div>}>
                  <RemoteCounter />
                </Suspense>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App