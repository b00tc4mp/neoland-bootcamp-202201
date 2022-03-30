import './UpdatePassword.sass'
import { updateUserPassword } from '../logic'
import { Button } from "../components"
import { Input } from './form-elements'

function UpdatePassword({ onBack }) {

    const updatePassword = event => {
        event.preventDefault()
        const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event

        try {
            updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
                .then(() => alert('password updated'))
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
        }
    }

    const goBack = event => {
        event.preventDefault()
        onBack()
    }

    return <div className="update-password__container">
        <form className="update-password__form" onSubmit={updatePassword} method="post">
            <div className='currPassword__label'>
                <label htmlFor="currPassword">Current Password</label>
                <Input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" />
            </div>

            <div className='newPassword__label'>
                <label htmlFor="password">New password</label>
                <Input id="password" className="update-password__password-input" type="password" name="newPassword" />
            </div>

            <div className='confirmPassword'>
                <label htmlFor="confirmPassword">Confirm new password</label>
                <Input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" />
            </div>
            <Button className="update-password__submit">Update Password</Button>

            <Button className="update-password__back-link" href="" onClick={goBack}>Go Back</Button>
        </form>
    </div>
}

export default UpdatePassword