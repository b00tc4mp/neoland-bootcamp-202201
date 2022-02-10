import './Profile.css'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../Logic'


function Profile({ token }) {


    const [name, setName] = useState('name')
    const [surname, setSurName] = useState('surname')
    const [email, setEmail] = useState('email')


    useEffect(() => {
        
        try {
            retrieveUser(token)
                .then(user=> { 
                    setName(user.name)
                    setSurName(user.surname)
                    setEmail(user.email)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <div className="profile">
        <form className="profile__form">
            <input className="profile__name-input" type="text" name="name" placeholder="name" value={name}/>
            <input className="profile__surname-input" type="text" name="surname" placeholder="surname" value={surname}/>
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" value={email}/>
            <button>Update profile</button>
            <a className="profile__update-password-link" href="">update password</a>
            <a className="profile__delete-account-link" href="">delete account</a>
        </form>
    </div>
}

export default Profile