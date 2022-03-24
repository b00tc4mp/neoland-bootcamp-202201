import './DeleteAccount.sass'
import { deleteUser } from '../logic'
import { Header } from './elements'

function DeleteAccount ({onBack, onLogo, onProfile, onHelp, onProgress, onDeletedAccount}){
    const goBack = event =>{
        event.preventDefault()
        onBack()
    }

    const deleteAccount = event => {
        event.preventDefault()

        const password = event.target.password.value

        try{
            deleteUser(sessionStorage.token, password)
                .then(() => onDeletedAccount())
                .catch(error => {throw error})
        } catch({message}){
            alert(message)
        }
    }
    return <div className="delete-account">
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp}/>
        <form className="delete-account__form" method="post" onSubmit={deleteAccount}>
            <input className="delete-account__password-input" type="password" name="password" placeholder="Password" />
            <button className="delete-acount__submit">Delete Account</button>
            <a className="delete-account__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>

}

export default DeleteAccount