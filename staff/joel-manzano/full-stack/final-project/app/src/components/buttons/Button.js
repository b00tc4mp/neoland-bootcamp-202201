import React from "react"
import './Button.sass'

const Button = ({ type='button', className='', children, onClick }) => {

    const click = event => {
        onclick && onClick(event)
    }

    return <>
        <button type={type} className={`button ${className}`} onClick={onClick}>{children}</button> 
    </>
}

export default Button