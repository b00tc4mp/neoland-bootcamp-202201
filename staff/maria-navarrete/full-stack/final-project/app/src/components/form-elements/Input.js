import './Input.sass'


const Input = ({ type = 'text', name = '', placeholder = '' }) => {
    return <>
        <input type={type} name={name} placeholder={placeholder} />
    </>
}


export default Input