import './Input.css'
import Feedback from './Feedback'
import { useState, useEffect } from 'react'

function Input({ type = 'text', name, feedback, onFocus, placeholder = '' }) {
    const [feedbackMessage, setFeedbackMessage] = useState()

    useEffect(() => {
        setFeedbackMessage(feedback)
    }, [feedback])


    const onChange = () => setFeedbackMessage()

    return (
        <div className="input">
            <div className={`input__body ${feedbackMessage && 'input__body--error'}`}>
                <input className="input__input" type={type} name={name} onFocus={onFocus} placeholder={placeholder} onChange={onChange} />
            </div>

            {feedbackMessage && <Feedback message={feedbackMessage} level="error" version="mini" />}
        </div>
    )
}

export default Input