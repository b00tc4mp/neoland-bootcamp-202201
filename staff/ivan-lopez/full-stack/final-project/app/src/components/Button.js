import React from 'react'
import "./Button.sass"

const Button = ({type='button', className='', children, onClick}) => {

return <>
    <button type={type} className={`button ${className}`} onClick={onClick}>{children}</button>
  </>
}

export default Button

// feature/web demo-app container compo