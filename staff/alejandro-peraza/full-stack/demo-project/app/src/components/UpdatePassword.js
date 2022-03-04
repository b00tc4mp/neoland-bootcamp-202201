import './UpdatePassword.css'
import { updateUserPassword } from '../logic'

function UpdatePassword({ onBack }) {

    const updatePassword = event => {
        event.preventDefault()
        const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event

        try{
            updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
                .then(()=> alert('password updated'))
                .catch(error =>{throw error})
        } catch ({message}){
            alert(message)
        }
    }   

    const goBack = event => {
        event.preventDefault()
        onBack()
    }

    return <div className="update-password">
        <form className="update-password__form" onSubmit={updatePassword} method="post">
            <label htmlFor="currPassword">Current Password</label>
            <input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" />

            <label htmlFor="password">New password</label>
            <input id="password" className="update-password__password-input" type="password" name="newPassword" />

            <label htmlFor="confirmPassword">Confirm new password</label>
            <input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" />

            <button className="update-password__submit">Update Password</button>

            <a className="update-password__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>
}

export default UpdatePassword