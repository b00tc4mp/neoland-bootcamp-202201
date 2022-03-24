import './Input.sass'

function Input({ type='text', name='', placeholder='', defaultValue}) {

    return <>
        <input type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} />

    </>

}

export default Input