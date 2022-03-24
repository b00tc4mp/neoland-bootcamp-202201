import React from 'react'
import "./Button.sass"

const Button = ({type='button', className='', children}) => {

return <>
    <button type={type} className={`button ${className}`}>{children}</button>
  </>
}

export default Button