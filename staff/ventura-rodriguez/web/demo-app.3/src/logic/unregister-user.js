import { validateToken, validatePassword } from './helpers/validators'

function unregisterUser(token, password) {
    validateToken(token)
    validatePassword(password)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
    })
        .then(res => {
            const { status } = res

            if (status === 204) {
                // TODO manage happy path
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

export default unregisterUser