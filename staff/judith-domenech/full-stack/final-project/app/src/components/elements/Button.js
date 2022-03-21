import './Button.sass'

function Button ({type='button', innertext='Enviar'}) {
    return <>
    <button className='button' type={type}>{innertext}</button>
    </>
}


export default Button