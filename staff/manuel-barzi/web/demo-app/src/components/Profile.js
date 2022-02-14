import './Profile.css'
import { updateUser, retrieveUser } from '../logic'
import { useEffect, useState } from 'react'
import Feedback from './Feedback'

function Profile({ token, onUpdatePassword, onDeleteAccount }) {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [feedback, setFeedback] = useState()
    const [feedbackLevel, setFeedbackLevel] = useState()

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(({ name, surname, email }) => {
                    setName(name)
                    setSurname(surname)
                    setEmail(email)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const updateProfile = event => {
        event.preventDefault()

        const { target: { name: { value: name }, surname: { value: surname }, email: { value: email } } } = event

        try {
            updateUser(token, name, surname, email)
                .then(() => {
                    setFeedback('Profile updated')
                    setFeedbackLevel('success')
                })
                .catch(error => {
                    setFeedback(error.message)
                    setFeedbackLevel('error')
                })
        } catch (error) {
            setFeedback(error.message)
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
            <input className="profile__name-input" type="text" name="name" placeholder="name" defaultValue={name} />
            <input className="profile__surname-input" type="text" name="surname" placeholder="surname" defaultValue={surname} />
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email} />

            <button>Update profile</button>
            {feedback && <Feedback message={feedback} level={feedbackLevel} />}

            <a className="profile__update-password-link" href="" onClick={goToUpdatePassword}>update password</a>
            <a className="profile__delete-account-link" href="" onClick={goToDeleteAccount}>delete account</a>
        </form>
    </div>
}

export default Profile