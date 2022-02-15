import './Password.css'
import { useState } from 'react'
import Feedback from './Feedback'

function Password({ name, feedback, onFocus }) {
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState('🐵 ')

    const toggleVisibility = () => {
        if (type === 'password') {
            setType('text')
            setIcon('🙈 ')
        } else {
            setType('password')
            setIcon('🐵 ')
        }
    }

    return (
        <div className="password">
            <div className={`password__body ${feedback && 'password__body--error'}`}>
                <input className="password__input" type={type} name={name} onFocus={onFocus} />
                <span className="password__icon" onClick={toggleVisibility}>{icon}</span>
            </div>

            {feedback && <Feedback message={feedback} level="error" version="mini" />}
        </div>
    )
}

export default Password