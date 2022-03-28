import './Select.sass'
import { useEffect } from 'react'

export function Select({ type = '', name = '', options = [], placeholder = 'Selecciona una opción', required = false, selected, label }) {

    useEffect(() => {
    }, [type, name, options, placeholder, required, selected, label])

    return <>
        {label && <label htmlFor={name}>{label}</label>}
        <select type={type} name={name} required={required}>
            <option selected={!selected ? true : false} value=''>{placeholder}</option>
            {options.map(option => <option key={option} value={option} selected={option === selected ? true : false}>{option}</option>)}
        </select>

    </>
}

