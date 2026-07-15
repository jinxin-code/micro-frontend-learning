import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="remote-react-app">
      <div className="header">
        <h3>React 远程组件 (Remote)</h3>
        <p>这是一个通过 Module Federation 暴露的 React 组件</p>
      </div>
      <div className="counter">
        <h4>计数器</h4>
        <p className="count">当前计数: {count}</p>
        <Button onClick={() => setCount(count + 1)}>增加</Button>
        <Button variant="secondary" onClick={() => setCount(count - 1)}>减少</Button>
        <Button variant="danger" onClick={() => setCount(0)}>重置</Button>
      </div>
      <div className="features">
        <h4>特性</h4>
        <ul>
          <li>通过 exposes 配置暴露组件</li>
          <li>与 Host 共享 React 依赖</li>
          <li>支持独立运行和作为远程组件加载</li>
        </ul>
      </div>
    </div>
  )
}

export default App