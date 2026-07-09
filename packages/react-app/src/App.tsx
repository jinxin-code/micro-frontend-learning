import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [globalCount, setGlobalCount] = useState(0)

  useEffect(() => {
    const qiankunWindow = window as unknown as Record<string, unknown>
    if (qiankunWindow.__POWERED_BY_QIANKUN__ && qiankunWindow.initGlobalState) {
      const actions = qiankunWindow.initGlobalState({})
      actions.onGlobalStateChange((state: Record<string, unknown>) => {
        if (state.count !== undefined) {
          setGlobalCount(state.count as number)
        }
      }, true)
    }
  }, [])

  return (
    <div className="react-app">
      <h2>⚛️ React 微应用</h2>
      <p className="description">这是一个基于 React 18 + TypeScript 的微应用</p>
      
      <div className="counter">
        <h3>本地计数器</h3>
        <p>当前值: <span className="value">{count}</span></p>
        <button onClick={() => setCount(c => c + 1)}>增加</button>
        <button onClick={() => setCount(c => c - 1)}>减少</button>
      </div>

      <div className="global-state">
        <h3>全局状态计数</h3>
        <p>来自主应用的全局状态: <span className="value">{globalCount}</span></p>
      </div>

      <div className="features">
        <h3>功能特点</h3>
        <ul>
          <li>支持独立运行 (localhost:3000)</li>
          <li>支持被 qiankun 主应用集成</li>
          <li>响应式设计</li>
          <li>TypeScript 类型安全</li>
        </ul>
      </div>
    </div>
  )
}

export default App