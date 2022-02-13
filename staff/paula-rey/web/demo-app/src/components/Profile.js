import './Profile.css'
import { useState, useEffect } from 'react'
import { retrieveUser, updateUser } from '../Logic'
import Feedback from './Feedback'


function Profile({ token, onUpdatePassword, onDeleteAccount }) {
    const [name, setName] = useState()
    const [surname, setSurName] = useState()
    const [email, setEmail] = useState()
    const [feedback, setFeedback] = useState()


    useEffect(() => {
        try {
            retrieveUser(token)
                .then(({ name, surname, email }) => {
                    setName(name)
                    setSurName(surname)
                    setEmail(email)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateProfile = event => {
        event.preventDefault()

        const { target: { name: { value: name }, surname: {value: surname }, email: { value: email } } } = event

        try {
            updateUser(token, name, surname, email)
                .then(() => {
                    setFeedback('Profile updated')
                })
                .catch(error => {
                    setFeedback(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const goToProfilePassword = event => {
        event.preventDefault()

        onUpdatePassword()
    }

    const goToDeleteAccount = event => {
        event.preventDefault()

        onDeleteAccount()
    }


    return <div className="profile">
        <form className="profile__form" onSubmit={updateProfile}>
            <input className="profile__name-input" type="text" name="name" placeholder="name" defaultValue={name}/>
            <input className="profile__surname-input" type="text" name="surname" placeholder="surname" defaultValue={surname}/>
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email}/>

            <button>Update profile</button>
            {feedback && <Feedback message={feedback} level="success" />}

            <a className="profile__update-password-link" href="" onClick={goToProfilePassword}>update password</a>
            <a className="profile__delete-account-link" href="" onClick={goToDeleteAccount}>delete account</a>
        </form>
    </div>
}

export default Profile