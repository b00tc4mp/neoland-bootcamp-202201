import './DeleteAccount.sass'
import { deleteUser } from '../logic'
import { Button } from "../components"
import { Input } from './form-elements'

function DeleteAccount ({onBack, onDeletedAccount}){

    const goBack = event => {
        event.preventDefault()
        onBack()
    }

    const deleteAccount = event => {
        event.preventDefault()

        const password = event.target.password.value

        try{
            deleteUser(sessionStorage.token, password)
                .then(()=> onDeletedAccount())
                .catch(error => {throw error})
        } catch({message}){
            alert(message)
        }
    }

    return <div className="delete-account__container">
        <form className="delete-account__form" method="post" onSubmit={deleteAccount}>
            <Input className="delete-account__password-input" type="password" name="password" placeholder="Password" />
            <Button className="delete-account__submit">Delete Account</Button>
            <Button className="delete-account__back-link" href="" onClick={goBack}>Go Back</Button>
        </form>
    </div>

}

export default DeleteAccount