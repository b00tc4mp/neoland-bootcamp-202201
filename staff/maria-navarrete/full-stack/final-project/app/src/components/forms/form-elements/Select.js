import { useEffect } from 'react'
import './Select.sass'


export const Select = ({ className = '', name = '', id = '', options = [], placeholder = 'Selecciona una opción', required = false, appendText, defaultValue, label }) => {


    return <div className={`select__div ${className}`}>
        {label && <label htmlFor={id} className={`${className}-label`}>{label}</label>}
        <select className={`select ${className}`} name={name} id={id} required={required}>
            <option defaultValue={defaultValue ? false : true} value=''>{placeholder}</option>
            {options.map(option => <option key={option} value={option} defaultValue={defaultValue === option ? true : false}>{`${option}${appendText ? ' ' + appendText : ''}`}</option>
            )}
        </select>
    </div>
}