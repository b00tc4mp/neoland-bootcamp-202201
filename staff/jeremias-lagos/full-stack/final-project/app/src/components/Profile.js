import './Profile.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import ModalCreateTournament from './elements/ModalCreateTournament'
import {useNavigate} from 'react-router-dom'




function Profile({ onUpdatePassword, onDeleteAccount, onLogOut }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isShowModal, setIsShowModal] = useState()

    const navigate = useNavigate();

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
                    alert('profile updated')
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

    const toggleModal = () => {
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

    const goToTournamentList = event => {
        event.preventDefault()
        navigate("/tournaments")
    }

    return <div className='profile'>
        {isShowModal && <ModalCreateTournament onClose={closeModal} />}

        <form className='profile__form' onSubmit={updateProfile} method='post'>
            <h2 className='profile__title'>My Profile</h2>

            <div className='profile__buttons'>
                <button className='profile__button-tournaments' onClick={goToTournamentList}>My Tournaments</button>
                <button className='profile__button-create' type='button' onClick={toggleModal}>Create Tournament</button>
            </div>
            <div className='profile__field'>
                <label className='profile__name-label' htmlFor='profile__name-input'>Name: </label>
                <input className='profile__name-input' id='profile__name-input' type='text' name='name' placeholder='Name' defaultValue={name} />
            </div>

            <div className="profile__field">
                <label className="profile__email-label" htmlFor="profile__email-input">E-mail: </label>
                <input className="profile__email-input" id="profile__email-input" type="email" name="email" placeholder="E-mail" defaultValue={email} />
            </div>

            <button type='submit' className="profile__submit">Update Profile</button>
            <a className='update-password__link' href="" onClick={goToUpdatePassword}>Update Password</a>
            <a className='delete-account__link' href="" onClick={goToDeleteAccount}>Delete Account</a>
            <button className='profile__log-out' type='button' onClick={logOut}>Log out</button>
        </form>


    </div>

}

export default Profile