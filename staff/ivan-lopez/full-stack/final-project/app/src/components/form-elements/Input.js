import './Input.sass'

function Input({className, type='text', name='', placeholder='', defaultValue }) {

    return <input className={`input ${className}`} type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} />

}

export default Input