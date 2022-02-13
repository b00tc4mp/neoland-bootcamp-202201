import './UpdatePassword.css'
import { useState } from 'react'
// import { useEffect } from 'react'
import { updateUserPassword } from '../Logic'
import Feedback from './Feedback'


function UpdatePassword({ onProfile, token }) {
    const [currPassword, setCurrPassword] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [feedback, setFeedback] = useState()

    // useEffect(() => {
    //     try {
    //         updateUserPassword(token)
    //             .then(({ currPassword, password, rePassword }) => {
    //                 setCurrPassword(currPassword)
    //                 setPassword(password)
    //                 setRePassword(rePassword)
    //             })
    //             .catch(error => alert(error.message))
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }, [])

    const updatePassword = event => {
        event.preventDefault()

        const { target: { currentPassword: { value: currPassword }, newPassword: { value: password }, retypePassword: { value: rePassword } } } = event

        try {
            updateUserPassword(token, currPassword, password, rePassword)
                .then(() => {
                    setCurrPassword(currPassword)
                    setPassword(password)
                    setRePassword(rePassword)
                    setFeedback('Password updated')
                })
                .catch(error => {
                    setFeedback(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }



    return <div className="update-password">
        <form className="update-password__form" onSubmit={updatePassword}>
            <input className="update-password__curr-password-input" type="password" name="name" placeholder="Current password" defaultValue={currPassword} />
            <input className="update-password__password-input" type="password" name="surname" placeholder="New password" defaultValue={password} />
            <input className="update-password__re-password-input" type="password" name="email" placeholder="Re-type new password" defaultValue={rePassword} />

            <button type="submit">Update password</button>
            {feedback && <Feedback message={feedback} level="success" />}
                                                          {/* 'error' */}
            <a className="update-password__back-link" href="" onClick={onProfile}>back</a>
        </form>
    </div>
}

export default UpdatePassword