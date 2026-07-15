import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '8px' }}>
      <h4 style={{ marginBottom: '16px', color: '#34495e' }}>Counter</h4>
      <p style={{ fontSize: '24px', fontWeight: '600', color: '#9b59b6', marginBottom: '16px' }}>
        Count: {count}
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#9b59b6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '8px'
        }}
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#7f8c8d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        -
      </button>
    </div>
  )
}

export default Counter