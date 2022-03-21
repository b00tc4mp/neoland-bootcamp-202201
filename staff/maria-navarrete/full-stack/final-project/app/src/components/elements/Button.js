import './Button.sass'


const Button = ({ type = 'button', innerText = 'Enviar' }) => {
    return <>
        <button type={type}>{innerText}</button>
    </>
}


export default Button
