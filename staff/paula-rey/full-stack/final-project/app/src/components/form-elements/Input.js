import './Input.sass'


export function Input({type='text', name= '', placeholder = 'Escribe aquí', required = false, defaultValue= null, label, disabled }) {

    return <>
        {label && <label htmlFor={name}>{label}</label>}
        <input className='input' type={type} name={name} placeholder={placeholder} required={required} defaultValue={defaultValue} disabled={disabled}/>
    </>

}

