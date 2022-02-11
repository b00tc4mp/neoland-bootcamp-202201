import { validateName, validateSurname, validateEmail, validatePassword } from './helpers/validators'

function registerUser(name, surname, email, password) {
    validateName(name)
    validateSurname(surname)
    validateEmail(email)
    validatePassword(password)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, username: email, password })
    })
        .then(res => {
            // const status = res.status
            const { status } = res

            if (status === 201) {
                // DONE manage happy path
                return
            } else if (status >= 400 && status < 500) {
                // DONE manage client error
                return res.json()
                    .then(payload => {
                        const { error } = payload

                        throw new Error(error)
                    })
            } else if (status >= 500) {
                // DONE manage server error
                throw new Error('server error')
            } else {
                throw new Error('unknown error')
            }
        })
}

export default registerUser