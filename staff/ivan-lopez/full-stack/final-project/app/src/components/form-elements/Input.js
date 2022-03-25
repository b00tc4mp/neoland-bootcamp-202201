import './Input.sass'

function Input({ type='text', name='', placeholder='', defaultValue }) {

    return <div className='input'>
        <input type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} />
    
    </div>

}

export default Input