import './Profile.css'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'

function Profile({token}) {
    const [name, setName] = useState()
    const [surname,setSurname] = useState()
    const [email,setEmail] = useState()

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => {
                    setName(user.name)
                    setSurname(user.surname)
                    setEmail(user.email)     
                }) 
                .catch(error => alert(error.message))      
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div className="profile">
        <form className="profile__form">
            <input className="profile__name-input" type="text" name="name" placeholder="name" defaultValue={name}></input>
            <input className="profile__surname-input" type="text" name="surname" placeholder="surname" defaultValue={surname}></input>
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email}></input>
            <button>Update profile</button>
            <a className="profile__update-password-link" href="">update password</a>
            <a className="profile__delete-account-link" href="">delete account</a>
        </form>
    </div>
}

export default Profile

