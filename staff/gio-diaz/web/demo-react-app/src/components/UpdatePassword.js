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
                .catch(error => {
                    setFeedback(error.message)
                    setFeedbackLevel('error')
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

            <label htmlFor="currPassword">Current Password</label>
            <input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" />

            <label htmlFor="password">New password</label>
            <input id="password" className="update-password__password-input" type="password" name="password" />

            <label htmlFor="confirmPassword">Confirm new password</label>
            <input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" />

            <button className="update-password__submit">Update Password</button>
            {feedback && <Feedback message={feedback} level={feedbackLevel} />}

            <a className="update-password__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>


}

export default UpdatePassword