import React from 'react'
import "./Button.sass"

const Button = ({type='button', className='', children, onClick}) => {

const click = event => {
  onClick && onClick(event)
}

return <>
    <button onClick={click} type={type} className={`button ${className}`}>{children}</button>
  </>
}

export default Button