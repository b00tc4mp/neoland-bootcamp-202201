import './Button.sass'

function Button({type="button", innerText="Enviar"}) {

    return <>
        <button type={type}>{innerText}</button>
    </>
}

export default Button