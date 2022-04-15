import './DeleteAccount.css'
import { unregisterUser } from '../logic'
import { useState } from 'react'

function DeleteAccount({onBack, onDeletedAccount }) {

    const goBack = event => {
        event.preventDefault()

        onBack()
    }

    const deleteAccount = event => {
        event.preventDefault()

        //const { target: { password: { value: password } } } = event
        const password = event.target.password.value

        try {
            unregisterUser(sessionStorage.token, password)
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
            <input className="delete-account__password-input" type="password" name="password" placeholder="Password" />

            <button>Delete account</button>

            <a className="delete-account__back-link" href="" onClick={goBack}>back</a>
        </form>
    </div>
}

export default DeleteAccount