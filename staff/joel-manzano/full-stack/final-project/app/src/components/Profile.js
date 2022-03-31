import './Profile.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'

function Profile({onUpdatePassword, onDeleteAccount, onLogOut}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
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
            updateUser(sessionStorage.token, name, email)
                .then(() => {
                    setName(name)
                    setEmail(email)
                    alert('User updated ;)')
                })
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
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

    const logOut = event => {
        event.preventDefault()
        delete sessionStorage.token
        onLogOut()
    }

    return <div className="profile-wrapper">
        <h1>Profile</h1>
        <form className="profile__form" onSubmit={updateProfile} method="post">
            <div className="profile__field">
                <label className="profile__label" htmlFor="profile__name-input">Name:</label>
                <input className="profile__input" id="profile__name-input" type="text" name="name" placeholder="Name" defaultValue={name} />
            </div>
            <div className="profile__field">
                <label className="profile__label" htmlFor="profile__email-input">Email:</label>
                <input className="profile__input" id="profile__email-input" type="email" name="email" placeholder="E-mail" defaultValue={email} />
            </div>
            <div className='update-profile-button-wrapper'>
                <button className="button">Update Profile</button>
            </div>
            <div className='update-profile-button-wrapper'>
                <button onClick={logOut} className="button logout-button"> Log out</button>
            </div>
            <div className='anchor-wrapper'>
                <a href="" onClick={goToUpdatePassword}>Update Password</a>
                <a href="" onClick={goToDeleteAccount}>Delete Account</a>
            </div>
        </form>
    </div>

}

export default Profile