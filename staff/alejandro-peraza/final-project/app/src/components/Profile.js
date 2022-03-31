import './Profile.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import { Button } from "../components"
import { Input } from './form-elements'

function Profile({ onUpdatePassword, onDeleteAccount, onLogOut }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(({ name, email }) => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
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
    return <div className="profile__container">
        <form className="profile__form" onSubmit={updateProfile} method="post">
            <div className="profile__field">
                <label className="profile__name-label" htmlFor="profile__name-input">Name</label>
                <Input className="profile__name-input" id="profile__name-input" type="text" name="name" placeholder="Name" defaultValue={name} />
            </div>
            <div className="profile__field">
                <label className="profile__email-label" htmlFor="profile__email-input">Email</label>
                <Input className="profile__email-input" id="profile__email-input" type="email" name="email" placeholder="E-mail" defaultValue={email} />
           
            <Button  type="submit" className="profile__submit">Update Profile</Button>
            <Button href="" onClick={goToUpdatePassword}>Update Password</Button>
            <Button href="" onClick={goToDeleteAccount}>Delete Account</Button>
            <Button onClick={logOut}> logOut</Button>
            </div>
        </form>
    </div>

}
export default Profile