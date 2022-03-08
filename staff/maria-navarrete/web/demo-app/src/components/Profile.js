import './Profile.css'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import Feedback from './Feedback'


function Profile({ token, refreshData, onUpdatePassword, onDeleteAccount }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [feedback, setFeedback] = useState()
    const [feedbackLevel, setFeedbackLevel] = useState()

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(({ name, email }) => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
        }
    }, [])

    const updateProfile = event => {
        event.preventDefault()
        const { target: { name: { value: name }, email: { value: email } } } = event
        try {
            updateUser(token, name, email)
                .then(() => {
                    setName(name)
                    setEmail(email)
                    refreshData(name)

                    setFeedback('Profile updated')
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

    const goToUpdatePassword = event => {
        event.preventDefault()
        onUpdatePassword()
    }

    const goToDeleteAccount = event => {
        event.preventDefault()
        onDeleteAccount()
    }

    return <div className="profile">
        <form className="profile__form" onSubmit={updateProfile} method="post">
            <div className="profile__field">
                <label className="profile__name-label" htmlFor="profile__name-input">Name</label>
                <input className="profile__name-input" id="profile__name-input" type="text" name="name" placeholder="Name" defaultValue={name} />
            </div>
            <div className="profile__field">
                <label className="profile__email-label" htmlFor="profile__email-input">Email</label>
                <input className="profile__email-input" id="profile__email-input" type="email" name="email" placeholder="E-mail" defaultValue={email} />
            </div>
            <button className="profile__submit">Update Profile</button>
            {feedback && <Feedback message={feedback} level={feedbackLevel} />}

            <a className="profile__update-password-link" href="" onClick={goToUpdatePassword}>Update Password</a>
            <a className="profile__delete-account-link" href="" onClick={goToDeleteAccount}>Delete Account</a>
        </form>
    </div>
}

export default Profile