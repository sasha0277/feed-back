import React from 'react'

const Button = ({children, color, type, isDisabled}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${color}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
color: 'primary',
type:'button',
isDisabled: false,
}

export default Button