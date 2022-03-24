import { updateUserPassword } from '../logic'
import { Header } from './elements'
import './UpdatePassword.sass'

function UpdatePassword ({ onBack, onProfile, onProgress, onLogo, onHelp }) {

    const updatePassword = event =>{
        event.preventDefault()

    const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event
    
        try{
            updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
                .then(() => { alert('password updated')})
                .catch(error => alert(error.message))
        }   catch (error){
            alert(error.message)
        }    
    }
    const goBack = event => {
        event.preventDefault()

        onBack()
    }

    return <div className="update-password">
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp}/>
        <h1>Update Password</h1>
        <form className="update-password__form" onSubmit={updatePassword}>
            <label htmlFor="currPassword">Current password</label>
            <input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" />

            <label htmlFor="newpassword">New password</label>
            <input id="password" className="update-password__password-input" type="password" name="newPassword" />

            <label htmlFor="confirmPassword">Confirm new password</label>
            <input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" />

            <button className='update__password-button'>Update password</button>

            <a className="update-password__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>

}

export default UpdatePassword