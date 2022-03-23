//import './UpdatePassword.css'
import { updateUserPassword } from '../logic'

export function UpdatePassword({ onBack }) {

    const updatePassword = event => {
        event.preventDefault()

        const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event

        try {
            updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
                .then(() => alert('password updated'))
                .catch(error => {throw error})
        } catch ({message}) {
            alert(message)
        }
    }

    const goBack = event => {
        event.preventDefault()

        onBack()
    }


    return <div className="update-password">
        <form className="update-password__form" onSubmit={updatePassword}>
            <label htmlFor="currPassword">Current password</label>
            <input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" />

            <label htmlFor="password">New password</label>
            <input id="password" className="update-password__password-input" type="password" name="newPassword" />

            <label htmlFor="confirmPassword">Confirm new password</label>
            <input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" />

            <button type="submit">Update password</button>

            <a className="update-password__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>
}

