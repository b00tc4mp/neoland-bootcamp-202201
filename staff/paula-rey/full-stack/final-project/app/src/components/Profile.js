import './Profile.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'

export function Profile({onUpdatePassword, onDeleteAccount}) {
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

        const { target:{ name: {value: name}, email: {value: email} } }  = event

        try {
            updateUser(sessionStorage.token, name, email)
                .then(() => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => { throw error })
        } catch ({message}) {
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

    return <div className="profile">
        <form className="profile__form" onSubmit={updateProfile} method="post">  
            <input className="profile__name-input" type="text" name="name" placeholder="name" defaultValue={name}/>
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email}/>

            <button>Update profile</button>

            <a className="profile__update-password-link" href="" onClick={goToUpdatePassword}>update password</a>
            <a className="profile__delete-account-link" href="" onClick={goToDeleteAccount}>delete account</a>
        </form>

    </div>

}

