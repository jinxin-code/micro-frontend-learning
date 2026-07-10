import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="react-app">
      <div className="header">
        <h2>React 微应用 (single-spa)</h2>
        <p>这是一个基于 React 18 的微应用，通过 single-spa 加载</p>
      </div>
      <div className="counter">
        <h3>计数器</h3>
        <p className="count">当前计数: {count}</p>
        <button className="btn" onClick={() => setCount(count + 1)}>增加</button>
        <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>减少</button>
        <button className="btn btn-danger" onClick={() => setCount(0)}>重置</button>
      </div>
      <div className="features">
        <h3>特性</h3>
        <ul>
          <li>支持独立运行和作为微应用加载</li>
          <li>使用 vite-plugin-single-spa 构建</li>
          <li>输出 SystemJS 格式</li>
        </ul>
      </div>
    </div>
  )
}