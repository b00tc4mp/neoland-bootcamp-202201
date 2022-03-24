import './Input.sass'

function Input({type='text', name={name}, placeholder = ''}) {

return <>
<input className='input' type={type} name={name} placeholder={placeholder} />
</>

}


export default Input