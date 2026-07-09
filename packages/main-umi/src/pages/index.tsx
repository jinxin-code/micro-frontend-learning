import { useState, useEffect } from 'react'
import { Link } from 'umi'
import { initGlobalState } from 'qiankun'

export default function Index() {
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
      <h2>欢迎来到 Umi 主应用</h2>
      <div className="cards">
        <div className="card">
          <h3>🏠 主应用</h3>
          <p>基于 Umi 框架构建</p>
          <p>使用 @umijs/plugin-qiankun 插件</p>
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