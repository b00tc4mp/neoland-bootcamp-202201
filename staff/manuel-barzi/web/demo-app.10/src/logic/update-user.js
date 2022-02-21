import { validateToken, validateName, validateSurname, validateEmail } from './helpers/validators'

function updateUser(token, name, surname, email) {
    validateToken(token)
    validateName(name)
    validateSurname(surname)
    validateEmail(email)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, username: email })
    })
        .then(res => {
            const { status } = res

            if (status === 204) {
                return
            } else if (status >= 400 && status < 500) {
                return res.json()
                    .then(payload => {
                        const { error } = payload

                        throw new Error(error)
                    })
            } else if (status >= 500) {
                throw new Error('server error')
            } else {
                throw new Error('unknown error')
            }
        })
}

export default updateUser