import './DeleteAccount.css'
import { useState } from 'react'
import { unregisterUser } from '../Logic'
import Feedback from './Feedback'

function DeleteAccount({ token, onProfile, onLanding }) {
    const [feedback, setFeedback] = useState()
    const [password, setPassword] = useState()

    const deleteAccount = event => {
        event.preventDefault()

        const { target: { password: { value: password } } } = event

        try {
            unregisterUser(token, password)
                .then(() => {
                    setFeedback('User deleted')
                    setPassword()
                    onLanding()
                })
                .catch(error => {
                    setFeedback(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }


    return <div className="delete-account">
        <form className="delete-account__form" onSubmit={deleteAccount}>
            <input className="delete-account__password-input" type="password" name="password" placeholder="Password" defaultValue={password} />
            <button type="submit">Delete account</button>
            {feedback && <Feedback message={feedback} level="error" />}
            <a className="delete-account__back-link" href="" onClick={onProfile}>back</a>
        </form>
    </div>
}

export default DeleteAccount