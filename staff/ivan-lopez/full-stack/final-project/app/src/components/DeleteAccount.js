//import './DeleteAccount.css'
import { deleteUser } from '../logic'
import { Button } from "../components"

function DeleteAccount ({onBack, onDeletedAccount}) {

    const goBack = event => {
        event.preventDefault()
        onBack()
    }

    const deleteAccount = event => {
        event.preventDefault()
        
        //const { target: { password: { value: password } } } = event
        const password = event.target.password.value

        try{
            deleteUser(sessionStorage.token, password)
                .then(() => onDeletedAccount())
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="delete-account">
        <form className="delete-account__form" method="post" onSubmit={deleteAccount}>
            <input className="delete-account__password-input" type="password" name="password" placeholder="Contraseña" />
            <Button className="delete-acount__submit">Eliminar cuenta</Button>
            <a className="delete-account__back-link" href="" onClick={goBack}>Atrás</a>
        </form>
    </div>

}

export default DeleteAccount