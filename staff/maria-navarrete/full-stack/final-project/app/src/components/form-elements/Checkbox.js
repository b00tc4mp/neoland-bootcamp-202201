import './Checkbox.sass'
import { useState } from 'react'

export const Checkbox = ({ id = '', name = '', label, checked }) => {

    const [isChecked, setIsChecked] = useState(String(checked))

    const onChange = event => {
        event.preventDefault()
        const { target: { checked } } = event
        setIsChecked(String(checked))
    }

    return <div>
        <input onChange={onChange} type="checkbox" id={id} name={name} checked={Boolean(isChecked)} />
        {label && <label htmlFor={id}> {label}</label>}
    </div>
}