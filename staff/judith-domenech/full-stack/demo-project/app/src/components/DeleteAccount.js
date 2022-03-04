import './DeleteAccount.css'
import { deleteUser } from '../logic'

function DeleteAccount ({onBack, onDeleteAccount}){
    const goBack = event =>{
        event.preventDefault()
        onBack()
    }

    const deleteAccount = event => {
        event.preventDefault()

        const password = event.target.password.value

        try{
            deleteUser(sessionStorage.token, password)
                .then(() => onDeleteAccount())
                .catch(error => {throw error})
        } catch({message}){
            alert(message)
        }
    }
    return <div className="delete-account">
        <form className="delete-account__form" method="post" onSubmit={deleteAccount}>
            <input className="delete-account__password-input" type="password" name="password" placeholder="Password" />
            <button className="delete-acount__submit">Delete Account</button>
            <a className="delete-account__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>

}

export default DeleteAccount