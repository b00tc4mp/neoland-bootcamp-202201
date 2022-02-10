import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import './Profile.css'


function Profile({ token, refreshData }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeEmail = (event) => setEmail(event.target.value)

    const updateProfile = event => {
        event.preventDefault()
        const {target:{name:{value:name}, email:{value:email}}}=event
        try{ updateUser(token, name, email)
                .then(()=>{
                    setName(name)
                    setEmail(email)
                    refreshData(name)
                })

        }catch ({message}){
            alert(message)
        }
    }
    
    useEffect(() => {
        try {
            retrieveUser(token)
                .then(({name, email}) => {
                    setName(name)
                    setEmail(email)
                })
        } catch ({ message }) {
            alert(message)
        }
    }, [])


    return <div className="profile">
        <form className="profile__form" onSubmit={updateProfile}>
            <div className="profile__field">
                <label className="profile__name-label" htmlFor="profile__name-input">Name</label>
                <input className="profile__name-input" id="profile__name-input" type="text" name="name" placeholder="Name" value={name} onChange={handleChangeName} />
            </div>
            <div className="profile__field">
                <label className="profile__email-label" htmlFor="profile__email-input">Email</label>
                <input className="profile__email-input" id="profile__email-input" type="email" name="email" placeholder="E-mail" value={email} onChange={handleChangeEmail} />
            </div>
            <button className="profile__submit">Update Profile</button>
            <a className="profile__update-password-link" href="">Update Password</a>
            <a className="profile__delete-account-link" href="">Delete Account</a>
        </form>
    </div>
}

export default Profile