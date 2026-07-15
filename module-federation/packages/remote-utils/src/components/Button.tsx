interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '12px 24px',
        backgroundColor: '#9b59b6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#8e44ad'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#9b59b6'
      }}
    >
      {children}
    </button>
  )
}

export default Button