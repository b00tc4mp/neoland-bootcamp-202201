import './Profile.css'
import { updateUser, retrieveUser } from '../logic'
import { useEffect, useState } from 'react'

function Profile({ token }) {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()

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
                    alert('Profile updated')
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="profile">
        <form className="profile__form" onSubmit={updateProfile}>
            <input className="profile__name-input" type="text" name="name" placeholder="name" defaultValue={name} />
            <input className="profile__surname-input" type="text" name="surname" placeholder="surname" defaultValue={surname} />
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email} />
            <button>Update profile</button>
            <a className="profile__update-password-link" href="">update password</a>
            <a className="profile__delete-account-link" href="">delete account</a>
        </form>
    </div>
}

export default Profile