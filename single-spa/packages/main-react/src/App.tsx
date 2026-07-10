import { useEffect, useState } from 'react'
import { registerApplication, start } from 'single-spa'

function App() {
  const [currentPath, setCurrentPath] = useState('/')
  const [count, setCount] = useState(0)

  useEffect(() => {
    registerApplication({
      name: '@single-spa/react-app',
      app: () => import('//localhost:8300/main.js'),
      activeWhen: ['/react'],
      customProps: {
        onGlobalStateChange: (state: Record<string, unknown>) => {
          console.log('Global state changed:', state)
          if (state.count !== undefined) {
            setCount(state.count as number)
          }
        },
        setGlobalState: (state: Record<string, unknown>) => {
          console.log('Set global state:', state)
          if (state.count !== undefined) {
            setCount(state.count as number)
          }
        }
      }
    })

    registerApplication({
      name: '@single-spa/vue-app',
      app: () => import('//localhost:8301/main.js'),
      activeWhen: ['/vue'],
      customProps: {
        onGlobalStateChange: (state: Record<string, unknown>) => {
          console.log('Global state changed:', state)
          if (state.count !== undefined) {
            setCount(state.count as number)
          }
        },
        setGlobalState: (state: Record<string, unknown>) => {
          console.log('Set global state:', state)
          if (state.count !== undefined) {
            setCount(state.count as number)
          }
        }
      }
    })

    start({
      urlRerouteOnly: true
    })
  }, [])

  function navigate(path: string) {
    setCurrentPath(path)
    window.history.pushState({ path }, '', path)
  }

  function updateGlobalCount() {
    setCount(count + 1)
    console.log('Update global count:', count + 1)
  }

  return (
    <div className="main-app">
      <nav className="nav-bar">
        <h1 className="logo">React 主应用 (single-spa)</h1>
        <ul className="nav-links">
          <li>
            <a className={currentPath === '/' ? 'active' : ''} onClick={() => navigate('/')}>首页</a>
          </li>
          <li>
            <a className={currentPath === '/react' ? 'active' : ''} onClick={() => navigate('/react')}>React 微应用</a>
          </li>
          <li>
            <a className={currentPath === '/vue' ? 'active' : ''} onClick={() => navigate('/vue')}>Vue 微应用</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        {currentPath === '/' ? (
          <div className="home">
            <h2>欢迎来到 React 主应用 (single-spa)</h2>
            <div className="cards">
              <div className="card">
                <h3>🏠 主应用</h3>
                <p>基于 React 18 + single-spa 构建</p>
                <p>使用 registerApplication 注册微应用</p>
              </div>
              <div className="card">
                <h3>⚛️ React 微应用</h3>
                <p>运行在 localhost:8300</p>
                <p>演示 React 技术栈接入</p>
              </div>
              <div className="card">
                <h3>💚 Vue 微应用</h3>
                <p>运行在 localhost:8301</p>
                <p>演示 Vue 技术栈接入</p>
              </div>
            </div>
            <div className="global-state-demo">
              <h3>🌐 全局状态管理演示</h3>
              <p>点击按钮更新全局状态，所有微应用都能收到通知</p>
              <button onClick={updateGlobalCount}>更新全局计数: {count}</button>
            </div>
          </div>
        ) : (
          <div id="micro-container">
            <h2>{currentPath === '/react' ? '⚛️ React 微应用' : '💚 Vue 微应用'}</h2>
          </div>
        )}
      </main>
    </div>
  )
}

export default App