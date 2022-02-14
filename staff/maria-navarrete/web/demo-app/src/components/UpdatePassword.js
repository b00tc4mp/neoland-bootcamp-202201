import './UpdatePassword.css'
import { useState } from 'react'
import { updateUserPassword } from '../logic'
import Feedback from './Feedback'

function UpdatePassword({ token, onBack }) {
    const [feedback, setFeedback] = useState()
    const [feedbackLevel, setFeedbackLevel] = useState()

    const updatePassword = event => {
        event.preventDefault()
        const { target: { currPassword: { value: currPassword }, password: { value: password }, confirmPassword: { value: confirmPassword } } } = event
        try {
            updateUserPassword(token, currPassword, password, confirmPassword)
                .then(() => {
                    setFeedback('Password Updated')
                    setFeedbackLevel('success')
                })
        } catch ({ message }) {
            setFeedback(message)
            setFeedbackLevel('error')          
        }
    }

    const goBack = event => {
        event.preventDefault()
        onBack()
    }

    return <div className="update-password">
        <form className="update-password__form" onSubmit={updatePassword} method="post">
            <div className="update-password__curr-password-area">
                <label htmlFor="currPassword">Current Password</label>
                <input className="update-password__curr-password-input" type="password" name="currPassword" />
                <label className="curr-password__toggle-icon curr-password__toggle-icon--show"
                    id="togglePassword"></label>
            </div>
            <div className="update-password__password-area">
                <label htmlFor="password">New password</label>
                <input className="update-password__password-input" type="password" name="password" />
                <label className="password__toggle-icon password__toggle-icon--show" id="togglePassword"></label>
            </div>
            <div className="update-password__re-password-area">
                <label htmlFor="rePassword">Confirm new password</label>
                <input className="update-password__re-password-input" type="password" name="confirmPassword" />
                <label className="re-password__toggle-icon re-password__toggle-icon--show" id="togglePassword"></label>
            </div>
            <button className="update-password__submit">Update Password</button>
            {feedback && <Feedback message={feedback} level={feedbackLevel} />}
            <a className="update-password__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>


}

export default UpdatePassword