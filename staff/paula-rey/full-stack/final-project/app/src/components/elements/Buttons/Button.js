import './Button.sass'

function Button({type="button", children="Enviar", onClick}) {

    const onClicked = (event) => {
        event.preventDefault()
        onClick && onClick()
    }

    return <>
        <button onClick={onClicked} type={type}>{children}</button>
    </>
}

export default Button