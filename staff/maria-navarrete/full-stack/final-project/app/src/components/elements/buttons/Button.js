import './Button.sass'


export const Button = ({ type = 'button', children = 'Enviar', onClick: _onClick, className = '' }) => {

    const onClick = event => {
        _onClick && _onClick(event)
    }

    return <>
        <button onClick={onClick} type={type} className={`button ${className}`}>{children}</button>
    </>
}

