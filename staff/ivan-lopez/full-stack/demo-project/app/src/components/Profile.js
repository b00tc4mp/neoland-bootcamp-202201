import './Profile.css'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'

function Profile() {
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
                })
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
        }
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

        </form>
    </div>

}

export default Profile