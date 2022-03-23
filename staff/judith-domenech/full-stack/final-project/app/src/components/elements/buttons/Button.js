import './Button.sass'

export function Button({ type = 'button', className='', onClick, children = 'Enviar' }) {
    
    const onClicked = event => {
        onClick && event.preventDefault()
        onClick && onClick(event)
    }

    return <>
        <button onClick={onClicked} className={className} type={type}>{children}</button>
    </>
}
