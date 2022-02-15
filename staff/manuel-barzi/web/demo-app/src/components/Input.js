import './Input.css'
import Feedback from './Feedback'

function Input({ type ='text', name, feedback, onFocus }) {

    return (
        <div className="input">
            <div className={`input__body ${feedback && 'input__body--error'}`}>
                <input className="input__input" type={type} name={name} onFocus={onFocus} />
            </div>

            {feedback && <Feedback message={feedback} level="error" version="mini" />}
        </div>
    )
}

export default Input