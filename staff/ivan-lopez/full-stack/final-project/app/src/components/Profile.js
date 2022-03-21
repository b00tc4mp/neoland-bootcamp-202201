// // import './Profile.css'
// import { retrieveUser, updateUser } from '../logic'
// import { useState, useEffect } from 'react'

// function Profile({onUpdatePassword, onDeleteAccount}) {
//     const [name, setName] = useState()
//     const [email, setEmail] = useState()

//     useEffect(() => {
//         try {
//             retrieveUser(sessionStorage.token)
//                 .then(({ name, email }) => {
//                     setName(name)
//                     setEmail(email)
//                 })
//                 .catch(error => alert(error.message))
//         } catch (error) {
//             alert(error.message)
//         }
//     }, [])

//     const updateProfile = event => {
//         event.preventDefault()

//         const { target:{ name: {value: name}, email: {value: email} } }  = event

//         try {
//             updateUser(sessionStorage.token, name, email)
//                 .then(() => {
//                     setName(name)
//                     setEmail(email)
//                 })
//                 .catch(error => { throw error })
//         } catch ({message}) {
//             alert(message)
//         }
//     }


//     }

//     const goToDeleteAccount = event => {
//         event.preventDefault()

//         onDeleteAccount()
//     }

//     return <div className='profile'>
//         <form className='profile__form' onSubmit={updateProfile} method='post'>  

//             <div className="profile__field">
//                 <label className="profile__name-label">Name</label>
//                 <input className='profile__name-input' type='text' name='name' placeholder='name' defaultValue={name}/>
//             </div>

//             <div className="profile__field">
//                 <label className="email-label">E-mail</label>
//                 <input className='profile__email-input' type='email' name='email' placeholder='email' defaultValue={email}/>
//             </div>
//             <button className='profile__submit'>Update profile</button>

//             <a className='profile__update-password-link' href='' onClick={goToUpdatePassword}>update password</a>
//             <a className='profile__delete-account-link' href='' onClick={goToDeleteAccount}>delete account</a>
//         </form>

//     </div>

// }


import { useState, useEffect } from 'react'
import { retrieveUser, updateUser } from '../logic'


function Profile({ onUpdatePassword, onDeleteAccount }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    //let user = null esto será un estado y con el useEffect luego le llegarán los datos, cuando lleguen los datos pintamos el compo
    // t tendrás que traer los datos del usuario..... retrieveUser..... useEffect

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


    return <> {
        <div>
            Bienvenido a tu perfil, ({name}) !

            <form className='profile__form' onSubmit={updateProfile} method='post'>

                <div className="profile__field">
                    <label className="profile__name-label">Name</label>
                    <input className='profile__name-input' type='text' name='name' placeholder='name' defaultValue={name} />
                </div>

                <div className="profile__field">
                    <label className="email-label">E-mail</label>
                    <input className='profile__email-input' type='email' name='email' placeholder='email' defaultValue={email} />
                </div>

                <button className='profile__submit'>Update profile</button>

                <a href='' className='profile__update-password-link' onClick={goToUpdatePassword}>update password</a>
                <a href='' className='profile__delete-account-link' onClick={goToDeleteAccount}>delete account</a>
            </form>
        </div>

    }</>
}

export default Profile