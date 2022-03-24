import React from 'react'
import "./Button.sass"

const Button = ({type='button', className='', children, onClick}) => {

  const click = event => {
    onClick && onClick(event)
  }

return <>
    <button type={type} className={`button ${className}`} onClick={click}>{children}</button>
  </>
}

export default Button

// feature/web demo-app container compo