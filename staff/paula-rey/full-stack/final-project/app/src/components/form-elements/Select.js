import './Select.sass'

function Select ({type = '', name= '', options = [], placeholder = 'selecciona una opción', required= false}) {

    return <>
        <select type={type} name={name} required={required}>
            <option hidden selected>{placeholder}</option>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    
    </>
}


export default Select