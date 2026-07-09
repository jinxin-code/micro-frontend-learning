import { Link, Outlet } from 'umi'
import { useState, useEffect } from 'react'
import { registerMicroApps, start } from 'qiankun'

export default function BasicLayout() {
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    registerMicroApps(
      [
        {
          name: 'react-app',
          entry: '//localhost:3000',
          container: '#subapp-viewport',
          activeRule: '/react'
        },
        {
          name: 'vue-app',
          entry: '//localhost:8081',
          container: '#subapp-viewport',
          activeRule: '/vue'
        },
        {
          name: 'static-app',
          entry: '//localhost:8082',
          container: '#subapp-viewport',
          activeRule: '/static'
        }
      ],
      {
        beforeLoad: (app) => {
          console.log('before load:', app.name)
          return Promise.resolve()
        },
        beforeMount: (app) => {
          console.log('before mount:', app.name)
          return Promise.resolve()
        },
        afterMount: (app) => {
          console.log('after mount:', app.name)
          return Promise.resolve()
        },
        beforeUnmount: (app) => {
          console.log('before unmount:', app.name)
          return Promise.resolve()
        },
        afterUnmount: (app) => {
          console.log('after unmount:', app.name)
          return Promise.resolve()
        }
      }
    )

    start({
      sandbox: { strictStyleIsolation: true }
    })
  }, [])

  return (
    <div className="main-app">
      <nav className="nav-bar">
        <h1 className="logo">Umi 主应用</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setCurrentPath('/')}>首页</Link>
          </li>
          <li>
            <Link to="/react" onClick={() => setCurrentPath('/react')}>React 微应用</Link>
          </li>
          <li>
            <Link to="/vue" onClick={() => setCurrentPath('/vue')}>Vue 微应用</Link>
          </li>
          <li>
            <Link to="/static" onClick={() => setCurrentPath('/static')}>静态微应用</Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}