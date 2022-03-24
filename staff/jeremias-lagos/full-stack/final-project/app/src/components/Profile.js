import './Profile.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import { Button } from "../components"
import { Input } from './form-elements'
import ModalCreateTournament from './elements/ModalCreateTournament'

function Profile({ onUpdatePassword, onDeleteAccount, onLogOut }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isShowModal, setIsShowModal] = useState()

    const toggleModal = () => {
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

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

    return <div className="profile">
        {isShowModal && <ModalCreateTournament onClose={closeModal}/> }
        <form className="profile__form" onSubmit={updateProfile} method="post">
            <div className="profile__field">
                <label className="profile__name-label" htmlFor="profile__name-input">Name</label>
                <Input className="profile__name-input" id="profile__name-input" type="text" name="name" placeholder="Name" defaultValue={name} />
            </div>
            <div className="profile__field">
                <label className="profile__email-label" htmlFor="profile__email-input">Email</label>
                <Input className="profile__email-input" id="profile__email-input" type="email" name="email" placeholder="E-mail" defaultValue={email} />
            </div>
            <Button className="profile__submit">Update Profile</Button>
            <a href="" onClick={goToUpdatePassword}>Update Password</a>
            <a href="" onClick={goToDeleteAccount}>Delete Account</a>
            <Button type='submit' onClick={logOut}>Log out</Button>
        </form>
        <div>
            <Button onClick={toggleModal}>Crear torneo</Button>
        </div>
    </div>

}

export default Profile