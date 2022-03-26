import './UserData.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import { Button } from '../components'

export function UserData({onUpdatePassword, onDeleteAccount}) {
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

    return <div className="data">
        <form className="data__form" onSubmit={updateProfile} method="post">  
            <input className="data__name-input" type="text" name="name" placeholder="name" defaultValue={name}/>
            <input className="data__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email}/>

            <Button>Update profile</Button>

            <a className="data__update-password-link" href="" onClick={goToUpdatePassword}>update password</a>
            <a className="data__delete-account-link" href="" onClick={goToDeleteAccount}>delete account</a>
        </form>

    </div>

}

