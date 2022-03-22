import './Select.sass'

export const Select = ({ name = '', id = '', options = [], placeholder = 'Selecciona una opción', required = false, appendText, selected, label }) => {
    return <>
        {label && <label htmlFor={name}>{label}</label>}
        <select name={name} id={id} required={required}>
            <option disabled hidden selected={selected ? true : false} value=''>{placeholder}</option>
            {options.map(option => <option key={option} value={option} selected={selected === option ? true : false}>{`${option}${appendText ? ' ' + appendText : ''}`}</option>
            )}
        </select>
    </>
}