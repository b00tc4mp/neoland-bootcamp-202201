import './Profile.css'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'

function Profile(token) {

    const [name, setName] = useState('name')
    const [surname, setSurname] = useState('surname')
    const [email, setEmail] = useState('email')

    useEffect(() => {
        try {
            retrieveUser()
            .then(user => setName(user.name))
            .then(user => setSurname(user.surname))
            .then(user => setEmail(user.email))
            .catch(error => alert(error.message))
            
        } catch (error) {
            alert(error.message)
        }
            
        }, [])
    
    
        return <div className="profile">
        <form className="profile__form">
            <input className="profile__name-input" type="text" name="name" placeholder="name" />
            <input className="profile__surname-input" type="text" name="surname" placeholder="surname" />
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" />
            <button>Update profile</button>
            <a className="profile__update-password-link" href="">update password</a>
            <a className="profile__delete-account-link" href="">delete account</a>
        </form>
    </div>
}

export default Profile 