interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
}

function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const variants = {
    primary: { background: '#3498db', hover: '#2980b9' },
    secondary: { background: '#7f8c8d', hover: '#6c7a7a' },
    danger: { background: '#e74c3c', hover: '#c0392b' }
  }

  return (
    <button
      onClick={onClick}
      style={{
        padding: '12px 24px',
        backgroundColor: variants[variant].background,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginRight: '12px',
        transition: 'background 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = variants[variant].hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = variants[variant].background
      }}
    >
      {children}
    </button>
  )
}

export default Button