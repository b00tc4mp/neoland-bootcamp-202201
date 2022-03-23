import './Button.sass'

export function Button({type="button", children="Enviar", onClick, className=''}) {

    const onClicked = (event) => {
        onClick && event.preventDefault()
        onClick && onClick(event)
    }

    return <>
        <button onClick={onClicked} className={className} type={type}>{children}</button>
    </>
}

