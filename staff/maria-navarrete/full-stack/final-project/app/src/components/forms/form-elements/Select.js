import { useEffect } from 'react'
import './Select.sass'


export const Select = ({ name = '', id = '', options = [], placeholder = 'Selecciona una opción', required = false, appendText, selected, label }) => {

    useEffect(() => {
    }, [name, id, options, placeholder, required, appendText, selected, label])

    return <>
        {label && <label htmlFor={id}>{label}</label>}
        <select name={name} id={id} required={required}>
            <option selected={selected ? false : true} value=''>{placeholder}</option>
            {options.map(option => <option key={option} value={option} selected={selected === option ? true : false}>{`${option}${appendText ? ' ' + appendText : ''}`}</option>
            )}
        </select>
    </>
}