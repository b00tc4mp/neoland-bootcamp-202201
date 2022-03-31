import './Input.sass'

function Input({ type = 'text', name='', placeholder = '', defaultValue, required = false }) {

    return <>
        <input className='input' type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} required={required}/>

    </>

}

export default Input