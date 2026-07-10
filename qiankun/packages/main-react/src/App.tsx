import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { registerMicroApps, start, initGlobalState } from 'qiankun'

const microApps = [
  {
    name: 'react-app',
    entry: '//localhost:3000',
    container: '#micro-container',
    activeRule: '/react'
  },
  {
    name: 'vue-app',
    entry: '//localhost:8081',
    container: '#micro-container',
    activeRule: '/vue'
  },
  {
    name: 'static-app',
    entry: '//localhost:8082',
    container: '#micro-container',
    activeRule: '/static'
  }
]

function NavBar() {
  const location = useLocation()
  
  return (
    <nav className="nav-bar">
      <h1 className="logo">React 主应用</h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>首页</Link>
        </li>
        <li>
          <Link to="/react" className={location.pathname === '/react' ? 'active' : ''}>React 微应用</Link>
        </li>
        <li>
          <Link to="/vue" className={location.pathname === '/vue' ? 'active' : ''}>Vue 微应用</Link>
        </li>
        <li>
          <Link to="/static" className={location.pathname === '/static' ? 'active' : ''}>静态微应用</Link>
        </li>
      </ul>
    </nav>
  )
}

function Home() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const actions = initGlobalState({
      count: 0,
      user: { name: 'Guest', role: 'visitor' },
      theme: 'light'
    })
    
    actions.onGlobalStateChange((state: Record<string, unknown>) => {
      if (state.count !== undefined) {
        setCount(state.count as number)
      }
    }, true)
    
    const updateBtn = document.getElementById('update-global-count')
    if (updateBtn) {
      updateBtn.addEventListener('click', () => {
        const newCount = count + 1
        setCount(newCount)
        actions.setGlobalState({ count: newCount })
      })
    }
    
    return () => {
      if (updateBtn) {
        updateBtn.removeEventListener('click', () => {})
      }
    }
  }, [count])
  
  return (
    <div className="home">
      <h2>欢迎来到 React 主应用</h2>
      <div className="cards">
        <div className="card">
          <h3>🏠 主应用</h3>
          <p>基于 React 18 + TypeScript 构建</p>
          <p>使用 React Router 管理路由</p>
        </div>
        <div className="card">
          <h3>⚛️ React 微应用</h3>
          <p>运行在 localhost:3000</p>
          <p>演示 React 技术栈接入</p>
        </div>
        <div className="card">
          <h3>💚 Vue 微应用</h3>
          <p>运行在 localhost:8081</p>
          <p>演示 Vue 技术栈接入</p>
        </div>
        <div className="card">
          <h3>📄 静态微应用</h3>
          <p>运行在 localhost:8082</p>
          <p>演示纯 HTML/JS 接入</p>
        </div>
      </div>
      <div className="global-state-demo">
        <h3>🌐 全局状态管理演示</h3>
        <p>点击按钮更新全局状态，所有微应用都能收到通知</p>
        <button id="update-global-count">更新全局计数: {count}</button>
      </div>
    </div>
  )
}

function MicroAppWrapper() {
  const location = useLocation()
  
  const titles: Record<string, string> = {
    '/react': '⚛️ React 微应用',
    '/vue': '💚 Vue 微应用',
    '/static': '📄 静态微应用'
  }
  
  return (
    <div className="micro-app-container">
      <h2>{titles[location.pathname] || location.pathname}</h2>
      <div id="micro-container"></div>
    </div>
  )
}

function App() {
  useEffect(() => {
    registerMicroApps(microApps, {
      beforeLoad: (app) => { console.log('before load:', app.name); return Promise.resolve() },
      beforeMount: (app) => { console.log('before mount:', app.name); return Promise.resolve() },
      afterMount: (app) => { console.log('after mount:', app.name); return Promise.resolve() },
      beforeUnmount: (app) => { console.log('before unmount:', app.name); return Promise.resolve() },
      afterUnmount: (app) => { console.log('after unmount:', app.name); return Promise.resolve() }
    })
    
    start({
      sandbox: { strictStyleIsolation: true }
    })
  }, [])
  
  return (
    <div className="main-app">
      <Router>
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react" element={<MicroAppWrapper />} />
            <Route path="/vue" element={<MicroAppWrapper />} />
            <Route path="/static" element={<MicroAppWrapper />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App